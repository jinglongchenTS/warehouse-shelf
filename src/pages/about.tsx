import Head from 'next/head'
// import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>关于我们 - 仓储货架</title>
        <meta name="description" content="了解我们公司的发展历程、企业文化和团队实力" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">关于我们</h1>
          <div className="prose prose-lg max-w-none">
            <p>
              我们是一家专业的仓储货架解决方案提供商，致力于为客户提供高品质、安全可靠的仓储设备和专业服务。
            </p>
            {/* 添加更多公司介绍内容 */}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">企业文化</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">使命</h3>
              <p className="text-gray-600">为客户创造价值，推动行业发展</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">愿景</h3>
              <p className="text-gray-600">成为全球领先的仓储解决方案提供商</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">核心价值观</h3>
              <p className="text-gray-600">诚信、创新、专业、共赢</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">荣誉资质</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* 添加资质证书展示 */}
          </div>
        </section>
      </div>
    </>
  )
}