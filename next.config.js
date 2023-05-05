/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'sun6-22.userapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs.dfs.ivi.ru',
      },
    ],
  },
};

module.exports = nextConfig;
