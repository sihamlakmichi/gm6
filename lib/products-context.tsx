"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import type { Product } from "./types"
import { products as initialProducts } from "./products"

interface ProductsContextType {
  products: Product[]
  addProduct: (product: Omit<Product, "id">) => void
  updateProduct: (id: string, product: Partial<Product>) => void
  deleteProduct: (id: string) => void
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("gm-industry-products")
    if (saved) {
      setProducts(JSON.parse(saved))
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("gm-industry-products", JSON.stringify(products))
    }
  }, [products, isHydrated])

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    }
    setProducts((prev) => [...prev, newProduct])
  }

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)))
  }

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider")
  }
  return context
}
