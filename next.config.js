/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'sun6-22.userapi.com',
      'vk.com',
      'thumbs.dfs.ivi.ru',
      'www.kinopoisk.ru',
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/photo/**',
      },
    ],
  },
};

module.exports = nextConfig;
