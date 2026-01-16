"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="bg-zinc-800 border-zinc-700 p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Paiement réussi !</h1>
          <p className="text-zinc-400 mb-8">
            Merci pour votre commande. Vous recevrez un email de confirmation avec les détails de votre achat.
          </p>
          <Link href="/produits">
            <Button className="bg-amber-500 hover:bg-amber-600 text-zinc-900">Continuer les achats</Button>
          </Link>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
