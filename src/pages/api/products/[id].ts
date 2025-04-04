import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | { message: string }>
) {
  const { id } = req.query
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ message: '产品未找到' })
  }

  res.status(200).json(product)
}