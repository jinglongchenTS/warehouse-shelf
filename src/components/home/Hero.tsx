import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="仓储货架背景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          专业的仓储货架解决方案
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          为您提供全方位的仓储规划、设计和实施服务，助力企业提升仓储效率，降低运营成本。
        </p>
        <div className="mt-10 flex gap-x-6">
          <Link
            href="/products"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500"
          >
            浏览产品
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  )
}