"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useProducts } from "@/lib/products-context"
import type { Product } from "@/lib/types"
import { categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductFormProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
}

export function ProductForm({ isOpen, onClose, product }: ProductFormProps) {
  const { addProduct, updateProduct } = useProducts()
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    prix: "",
    categorie: "",
    image: "" // ici on stockera l'image en base64
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    if (product) {
      setFormData({
        titre: product.titre,
        description: product.description,
        prix: product.prix.toString(),
        categorie: product.categorie,
        image: product.image,
      })
      setImagePreview(product.image)
    } else {
      setFormData({
        titre: "",
        description: "",
        prix: "",
        categorie: "",
        image: "",
      })
      setImagePreview(null)
    }
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.image) {
      alert("Veuillez sélectionner une image pour le produit !")
      return
    }

    const productData = {
      titre: formData.titre,
      description: formData.description,
      prix: Number.parseFloat(formData.prix),
      categorie: formData.categorie,
      image: formData.image,
    }

    if (product) {
      updateProduct(product.id, productData)
    } else {
      addProduct(productData)
    }

    onClose()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result as string })
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const productCategories = categories.filter((c) => c !== "Tous")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-800 border-zinc-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">{product ? "Modifier le produit" : "Ajouter un produit"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Titre */}
          <div className="space-y-2">
            <Label htmlFor="titre" className="text-zinc-300">Titre</Label>
            <Input
              id="titre"
              value={formData.titre}
              onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
              placeholder="Nom du produit"
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-zinc-300">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Description du produit"
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 min-h-24"
              required
            />
          </div>

          {/* Prix et Catégorie */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prix" className="text-zinc-300">Prix (EUR)</Label>
              <Input
                id="prix"
                type="number"
                step="0.01"
                min="0"
                value={formData.prix}
                onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
                placeholder="0.00"
                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categorie" className="text-zinc-300">Catégorie</Label>
              <Select
                value={formData.categorie}
                onValueChange={(value) => setFormData({ ...formData, categorie: value })}
                required
              >
                <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  {productCategories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="text-zinc-300 focus:bg-zinc-700 focus:text-white"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Image */}
          <div className="space-y-2">
            <Label htmlFor="image" className="text-zinc-300">Image du produit (obligatoire)</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
              required={!product}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 max-h-40 object-contain border border-zinc-700 rounded"
              />
            )}
          </div>

          {/* Boutons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-700 bg-transparent"
            >
              Annuler
            </Button>
            <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-900">
              {product ? "Mettre à jour" : "Ajouter"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
