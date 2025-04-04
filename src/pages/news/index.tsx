import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NewsItem } from '@/types'

interface NewsPageProps {
  news: NewsItem[]
}

export default function NewsPage({ news }: NewsPageProps) {
  return (
    <>
      <Head>
        <title>新闻动态 - 仓储货架</title>
        <meta name="description" content="了解我们的最新动态、行业资讯和展会信息" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">新闻动态</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {item.image && (
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <time className="text-sm text-gray-500">{item.date}</time>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  <Link href={`/news/${item.id}`} className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-3 text-gray-600 line-clamp-3">{item.content}</p>
                {/* <Link
                  href={`/news/${item.id}`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-500"
                >
                  阅读更多 →
                </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`)
  const news = [
    {
      id: '1',
      title: '公司参加2023年物流展览会',
      content: '我司携最新仓储解决方案亮相2023年物流展览会，获得广泛关注...',
      date: '2023-06-15',
      // image: '/images/news/exhibition.jpg',
      category: 'company',
    },
    {
      id: '2',
      title: '公司参加2024年物流展览会',
      content: '我司携最新仓储解决方案亮相2023年物流展览会，获得广泛关注...',
      date: '2024-06-15',
      // image: '/images/news/exhibition.jpg',
      category: 'company',
    },
    {
      id: '3',
      title: '公司参加2025年物流展览会',
      content: '我司携最新仓储解决方案亮相2023年物流展览会，获得广泛关注...',
      date: '2025-03-15',
      // image: '/images/news/exhibition.jpg',
      category: 'company',
    },
    {
      id: '4',
      title: '公司参加2025年物流展览会',
      content: '我司携最新仓储解决方案亮相2023年物流展览会，获得广泛关注...',
      date: '2025-05-01',
      // image: '/images/news/exhibition.jpg',
      category: 'company',
    },
    // ... 更多新闻数据
  ]

  return {
    props: {
      news,
    },
    revalidate: 60,
  }
}