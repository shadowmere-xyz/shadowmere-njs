/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    },
  },
  staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig
