import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">关于我们</h3>
            <p className="text-gray-400">
              专业的仓储货架解决方案提供商，致力于为客户提供高品质、安全可靠的仓储设备和专业服务。
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {[
                { name: '产品中心', href: '/products' },
                { name: '关于我们', href: '/about' },
                { name: '新闻动态', href: '/news' },
                { name: '联系我们', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400">
              <li>电话：400-XXX-XXXX</li>
              <li>邮箱：contact@example.com</li>
              <li>地址：上海市浦东新区XX路XX号</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {/* 这里可以添加社交媒体图标 */}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 仓储货架. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}