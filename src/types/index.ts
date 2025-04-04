export interface Product {
  id: string
  name: string
  category: string
  description: string
  specifications: {
    size: string
    weight: string
    loadCapacity: string
    material: string
  }
  images: string[]
  price?: number
  features: string[]
}

export interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  image?: string
  category: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}