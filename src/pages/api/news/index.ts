import type { NextApiRequest, NextApiResponse } from 'next'
import { NewsItem } from '@/types'

const news: NewsItem[] = [
  {
    id: '1',
    title: '公司参加2023年物流展览会',
    content: '我司携最新仓储解决方案亮相2023年物流展览会，获得广泛关注...',
    date: '2023-06-15',
    image: '/images/news/exhibition.jpg',
    category: 'company',
  },
  // ... 更多新闻数据
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsItem[]>
) {
  res.status(200).json(news)
}