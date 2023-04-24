/** @type {import('next').NextConfig} */

const glob = require('glob');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Поиск всех файлов WOFF2 в директории fonts
    const fontFiles = glob.sync('**/*.woff2', { cwd: 'public/fonts' });
    // Добавление лоадера для каждого найденного файла шрифта
    fontFiles.forEach((fontFile) => {
      config.module.rules.push({
        test: /[/\\]fonts[/\\].*\.woff2$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/fonts/',
            outputPath: isServer ? `${process.cwd()}/.next/server/static/fonts/` : 'static/fonts/',
            name: '[name]-[hash].[ext]',
            esModule: false,
          },
        },
        include: [path.resolve(__dirname, fontFile)],
      });
    });
    // module.exports = {
    //   i18n: {
    //     locales: ['ru-RU', 'en-US'],
    //     defaultLocale: 'ru-RU',
    //     domains: [
    //       {
    //         domain: 'localhost:3000/ru/',
    //         defaultLocale: 'ru-RU',
    //       },
    //       {
    //         domain: 'localhost:3000/en-US/',
    //         defaultLocale: 'en-US',
    //       },
    //     ],
    //   },
    // };
    return config;
  },
};

module.exports = nextConfig;
