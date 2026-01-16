import { NextResponse } from "next/server"
import Stripe from "stripe"
import type { CartItem } from "@/lib/types"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
})

export async function POST(request: Request) {
  try {
    const { items } = (await request.json()) as { items: CartItem[] }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.titre,
          description: item.description,
          images: [item.image.startsWith("http") ? item.image : `https://placeholder.svg?height=400&width=400`],
        },
        unit_amount: Math.round(item.prix * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${request.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/panier`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "Erreur lors de la création de la session de paiement" }, { status: 500 })
  }
}
