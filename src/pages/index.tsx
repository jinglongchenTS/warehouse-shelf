import Head from 'next/head'
// 从正确的相对路径导入Hero组件
import Hero from '../components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import CompanyIntro from '@/components/home/CompanyIntro'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>仓储货架解决方案 | 首页</title>
        <meta name="description" content="专业的仓储货架解决方案提供商，为您提供优质的仓储设备和服务" />
      </Head>

      <main>
        <Hero />
        <ProductShowcase />
        <CompanyIntro />
        <ContactSection />
      </main>
    </>
  )
}