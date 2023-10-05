// @type {import('next').NextConfig}

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DEBUG: process.env.NEXT_PUBLIC_DEBUG,
  },
}

module.exports = nextConfig
