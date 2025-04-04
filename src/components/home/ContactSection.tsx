import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          需要专业的仓储解决方案？
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          我们的专业团队随时为您提供支持和咨询服务
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-8 py-3 text-lg font-semibold text-blue-600 hover:bg-blue-50"
          >
            立即咨询
          </Link>
        </div>
      </div>
    </section>
  )
}