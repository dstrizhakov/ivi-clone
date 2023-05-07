import Head from 'next/head';
import NotFound from '../components/NotFound/NotFound';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.page-404')}</title>
      </Head>
      <NotFound />
    </>
  );
};
export default NotFoundPage;
