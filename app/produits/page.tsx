"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useProducts } from "@/lib/products-context"
import { categories } from "@/lib/products"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProduitsPage() {
  const { products } = useProducts()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("TOUS")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.titre.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "TOUS" || product.categorie === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          {/* Page Header */}
          <div className="mb-4 sm:mb-8">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">Nos Produits</h1>
            <p className="text-muted-foreground text-xs sm:text-base">
              Explorez notre gamme complète d'équipements professionnels
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4 sm:mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 sm:pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground h-10 sm:h-12 text-sm"
            />
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap flex-shrink-0 text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé
            {filteredProducts.length > 1 ? "s" : ""}
          </p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 bg-card/50 rounded-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-secondary rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-base sm:text-lg mb-1 sm:mb-2">Aucun produit trouvé</p>
              <p className="text-muted-foreground/70 text-xs sm:text-sm">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
