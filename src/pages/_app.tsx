import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { wrapper } from '@/store/store';
import '@/i18n/settings/i18n';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Modals from '@/components/Modals/Modals';

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t('title.home')}</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
        <Modals />
      </MainLayout>
    </>
  );
}
//Provider передает store внутри wrapper согласно документации https://github.com/kirill-konshin/next-redux-wrapper/
export default wrapper.withRedux(App);
