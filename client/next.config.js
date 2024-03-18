// @type {import('next').NextConfig}

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DEBUG: process.env.NEXT_PUBLIC_DEBUG,
    NEXT_PUBLIC_NHOST_SUBDOMAIN: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
    NEXT_PUBLIC_NHOST_REGION: process.env.NEXT_PUBLIC_NHOST_REGION,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
}

module.exports = nextConfig
