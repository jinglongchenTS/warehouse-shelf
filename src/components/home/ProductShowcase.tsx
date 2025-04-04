import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: '重型货架',
    description: '适用于大型仓库，承重能力强，存取效率高',
    image: '/images/products/heavy-duty.jpg',
  },
  {
    id: 2,
    name: '中型货架',
    description: '灵活多变，适合各类仓储需求',
    image: '/images/products/medium-duty.jpg',
  },
  {
    id: 3,
    name: '轻型货架',
    description: '经济实用，适合小型仓储空间',
    image: '/images/products/light-duty.jpg',
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            产品中心
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            多样化的仓储解决方案，满足不同行业需求
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-500"
                >
                  了解更多 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-white hover:bg-blue-500"
          >
            查看全部产品
          </Link>
        </div>
      </div>
    </section>
  )
}