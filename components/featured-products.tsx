"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useProducts } from "@/lib/products-context"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const { products } = useProducts()
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Produits Vedettes</h2>
            <p className="text-muted-foreground">Découvrez nos équipements les plus populaires</p>
          </div>
          <Link href="/produits">
            <Button
              variant="outline"
              className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Voir tout
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
