"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function PanierPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart()

  const [clientName, setClientName] = useState("")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-MA", {
      style: "currency",
      currency: "MAD",
      minimumFractionDigits: 2,
    }).format(price)
  }

  const handleWhatsAppOrder = () => {
    if (!clientName.trim()) {
      alert("Veuillez saisir votre nom avant de confirmer la commande.")
      return
    }

    const phoneNumber = "212700326121" // sans +

    let message =
      `🛒 *Nouvelle commande GM INDUSTRY*%0A%0A` +
      `👤 *Client :* ${clientName}%0A%0A`

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.titre}*%0A`
      message += `   Quantité : ${item.quantity}%0A`
      message += `   Prix : ${formatPrice(item.prix)}%0A%0A`
    })

    message += `💰 *Total : ${formatPrice(totalPrice)}*%0A%0A`
    message += "📍 Merci de me contacter pour confirmer la commande."

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, "_blank")

    // ✅ vider le panier après confirmation
    clearCart()
    setClientName("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/produits">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continuer les achats
            </Button>
          </Link>

          <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

          {items.length === 0 ? (
            <Card className="p-12 text-center">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h2 className="text-xl font-semibold mb-2">
                Votre panier est vide
              </h2>
              <Link href="/produits">
                <Button>Voir les produits</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.titre}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold">
                            {item.titre}
                          </h3>
                          <p className="text-sm opacity-70">
                            {item.categorie}
                          </p>
                        </div>
                        <span className="font-bold text-primary">
                          {formatPrice(item.prix)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="w-4 h-4" />
                          </Button>

                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Client + Récap */}
              <Card className="p-6 mt-8 space-y-4">
                <h2 className="text-xl font-semibold">
                  Informations client
                </h2>

                <Input
                  placeholder="Votre nom complet"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Total</span>
                    <span className="font-bold text-primary">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <Button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Valider la commande via WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
