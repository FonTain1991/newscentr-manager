/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  rewrites() {
    return process.env.SERVER_PROXY ? [
      {
        source: '/api/:path*',
        destination: process.env.SERVER_PROXY + '/api/:path*',
      },
      {
        source: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
        destination: process.env.SERVER_PROXY + process.env.NEXT_PUBLIC_GRAPHQL_PATH,
      },
      {
        source: process.env.NEXT_PUBLIC_GRAPHQL_PATH_WS,
        destination: process.env.SERVER_PROXY + process.env.NEXT_PUBLIC_GRAPHQL_PATH_WS,
      }
    ] : []
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      },
    ]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

export default nextConfig
