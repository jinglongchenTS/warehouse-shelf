import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Product } from "@/types";
import ProductGrid from "@/components/products/ProductGrid";

interface ProductsPageProps {
  products: Product[];
}

const categories = [
  { id: "all", name: "全部" },
  { id: "heavy", name: "重型货架" },
  { id: "medium", name: "中型货架" },
  { id: "light", name: "轻型货架" },
  { id: "auto", name: "自动化立体仓库" },
];

export default function ProductsPage({ products }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>产品中心 - 仓储货架</title>
        <meta
          name="description"
          content="浏览我们的仓储货架产品系列，包括重型货架、中型货架、轻型货架和自动化立体仓库等解决方案"
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              产品中心
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl">
              浏览我们的全系列仓储货架产品，为您的仓储需求找到最佳解决方案
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 sm:items-center">
            <div className="order-2 sm:order-1 flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="order-1 sm:order-2 w-full sm:w-72 lg:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索产品..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="min-h-[300px]">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                <ProductGrid products={filteredProducts} />
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg">没有找到匹配的产品</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const products = [
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
    {
      id: "2",
      name: "中型货架",
      category: "medium",
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
    {
      id: "3",
      name: "轻型货架",
      category: "light",
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
    {
      id: "4",
      name: "自动化立体仓库",
      category: "auto",
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

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};
