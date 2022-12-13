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
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'shadowmere.akiel.dev',
  //       port: '80',
  //       pathname: '**/qr',
  //       // pathname: '/account123/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
