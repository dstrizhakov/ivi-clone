import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { wrapper } from '@/store/store';
import '@/i18n/settings/i18n';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Modals from '@/components/Modals/Modals';
import localFont from 'next/font/local';

const iviSans = localFont({
  src: [
    {
      path: '../../public/fonts/iviSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t('title.home')}</title>
      </Head>
      <div className={iviSans.className}>
        <MainLayout>
          <Component {...pageProps} />
          <Modals />
        </MainLayout>
      </div>
    </>
  );
}
//Provider передает store внутри wrapper согласно документации https://github.com/kirill-konshin/next-redux-wrapper/
export default wrapper.withRedux(App);
