"use client"

import Image from "next/image"
import { ShoppingCart, Check } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
}

const categoryColors: Record<string, string> = {
  EPI: "bg-blue-500 text-white",
  SECOURISME: "bg-red-500 text-white",
  SIGNALISATION: "bg-yellow-500 text-zinc-900",
  INDUSTRIEL: "bg-zinc-600 text-white",
  LOGISTIQUE: "bg-green-500 text-white",
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items } = useCart()

  const isInCart = items.some((item) => item.id === product.id)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-MA", {
      style: "currency",
      currency: "MAD",
    }).format(price)
  }

  return (
    <Card className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.titre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge
          className={`absolute top-2 left-2 text-[10px] sm:text-xs px-1.5 sm:px-2 ${
            categoryColors[product.categorie] || "bg-primary text-primary-foreground"
          }`}
        >
          {product.categorie}
        </Badge>
      </div>

      <CardContent className="p-2.5 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-lg font-semibold mb-1 line-clamp-1">
          {product.titre}
        </h3>

        <p className="text-muted-foreground text-[10px] sm:text-sm mb-2 sm:mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <span className="text-sm sm:text-xl font-bold text-primary">
            {formatPrice(product.prix)}
          </span>

          <Button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            size="sm"
            className={`text-xs sm:text-sm px-2 sm:px-4 h-7 sm:h-9 transition-all duration-300
              ${
                isInCart
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Déjà en panier</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Ajouter</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
