/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   if (dev) {
  //     config.module.rules.push({
  //       test: /\.(j|t)sx?$/,
  //       exclude: /node_modules/,
  //       loader: 'eslint-loader',
  //     })
  //   }
  //   return config
  // },
}