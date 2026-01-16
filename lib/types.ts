export interface Product {
  id: string
  titre: string
  description: string
  prix: number
  categorie: string
  image: string
}

export interface CartItem extends Product {
  quantity: number
}
