/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 1024, 1920],
    imageSizes: [320, 480, 768],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  swcMinify: true,
}

module.exports = nextConfig
