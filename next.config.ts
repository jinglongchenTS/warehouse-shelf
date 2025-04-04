import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
  },
}

module.exports = nextConfig