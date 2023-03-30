/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   styledComponents: {
  //     displayName: true,
  //     ssr: true
  //   },
  // },
  staticPageGenerationTimeout: 1000,
  // output: 'standalone',
}

module.exports = nextConfig
