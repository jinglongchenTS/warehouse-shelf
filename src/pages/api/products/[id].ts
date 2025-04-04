import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | { message: string }>
) {
  const { id } = req.query;
  const products: Product[] = [
    {
      id: "1",
      name: "重型货架",
      category: "heavy",
      description: "适用于大型仓库，承重能力强，存取效率高",
      specifications: {
        size: "2000×1000×4000mm",
        weight: "500kg",
        loadCapacity: "1500kg/层",
        material: "优质冷轧钢",
      },
      images: [
        "/images/products/heavy-duty-1.jpg",
        "/images/products/heavy-duty-2.jpg",
      ],
      features: ["高承重能力", "安装便捷", "结构稳定", "可定制尺寸"],
    },
    // ... 更多产品数据
  ];
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "产品未找到" });
  }

  res.status(200).json(product);
}
