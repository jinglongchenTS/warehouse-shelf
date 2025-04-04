import Image from 'next/image'

export default function CompanyIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              专业的仓储设备制造商
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              我们拥有20年的行业经验，致力于为客户提供最优质的仓储解决方案。从产品设计到安装维护，我们始终坚持高标准、严要求。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-5xl font-bold text-blue-600">2000+</h3>
                <p className="mt-2 text-gray-600">成功案例</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-blue-600">98%</h3>
                <p className="mt-2 text-gray-600">客户满意度</p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/company-intro.jpg"
              alt="公司简介"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}