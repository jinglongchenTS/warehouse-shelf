import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { ContactForm } from '@/types'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    // 处理表单提交
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>联系我们 - 仓储货架</title>
        <meta name="description" content="联系我们，获取更多产品信息和服务支持" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">联系我们</h1>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">公司地址</h3>
                <p className="mt-2 text-gray-600">上海市浦东新区XX路XX号</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">联系电话</h3>
                <p className="mt-2 text-gray-600">400-XXX-XXXX</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">电子邮箱</h3>
                <p className="mt-2 text-gray-600">contact@example.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">工作时间</h3>
                <p className="mt-2 text-gray-600">周一至周五 9:00-18:00</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">请输入姓名</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  电子邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">请输入有效的电子邮箱</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">请输入联系电话</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  留言内容
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">请输入留言内容</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700"
              >
                提交
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}