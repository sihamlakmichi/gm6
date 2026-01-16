"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Pencil, Trash2, LogOut, Package, Search } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useProducts } from "@/lib/products-context"
import type { Product } from "@/lib/types"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductForm } from "@/components/product-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function AdminDashboard() {
  const { logout } = useAuth()
  const { products, deleteProduct } = useProducts()

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  /* 🔹 Catégories dynamiques */
  const categories = ["Tous", ...new Set(products.map((p) => p.categorie))]

  /* 🔹 Filtrage */
  const filteredProducts = products.filter((product) => {
    const matchSearch =
      product.titre.toLowerCase().includes(search.toLowerCase()) ||
      product.categorie.toLowerCase().includes(search.toLowerCase())

    const matchCategory =
      selectedCategory === "Tous" || product.categorie === selectedCategory

    return matchSearch && matchCategory
  })

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price)

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const handleDelete = (id: string) => {
    deleteProduct(id)
    setDeleteConfirm(null)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingProduct(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Gestion des Produits</h1>
              <p className="text-zinc-400">
                {products.length} produit{products.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-zinc-900"
              >
                <Plus className="w-4 h-4 mr-2" />
                Ajouter
              </Button>

              <Button
                variant="outline"
                onClick={logout}
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>

          {/* SEARCH + FILTER */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un produit..."
                className="pl-10 bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* PRODUCTS LIST */}
          {filteredProducts.length === 0 ? (
            <Card className="bg-zinc-800 border-zinc-700 p-12 text-center">
              <Package className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h2 className="text-xl text-white mb-2">Aucun produit trouvé</h2>
              <p className="text-zinc-400">Essayez un autre filtre</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-zinc-800 border-zinc-700 p-4">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 bg-zinc-900 rounded overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.titre}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-white font-semibold truncate">
                          {product.titre}
                        </h3>
                        <Badge className="bg-amber-500/10 text-amber-500">
                          {product.categorie}
                        </Badge>
                      </div>

                      <p className="text-zinc-400 text-sm line-clamp-1 mb-2">
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="text-amber-500 font-bold">
                          {formatPrice(product.prix)}
                        </span>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(product)}
                            className="border-zinc-700 text-zinc-300"
                          >
                            <Pencil className="w-4 h-4 mr-1" />
                            Modifier
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setDeleteConfirm(product.id)}
                            className="border-red-500/20 text-red-500"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Supprimer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* FORM */}
      <ProductForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        product={editingProduct}
      />

      {/* DELETE CONFIRM */}
      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent className="bg-zinc-800 border-zinc-700">
          <DialogHeader>
            <DialogTitle className="text-white">
              Confirmer la suppression
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteConfirm(null)}
              className="border-zinc-700 text-zinc-300"
            >
              Annuler
            </Button>
            <Button
              onClick={() => deleteConfirm && handleDelete(deleteConfirm)}
              className="bg-red-500 text-white"
            >
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
