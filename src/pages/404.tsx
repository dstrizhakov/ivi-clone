import Head from 'next/head';
import NotFound from '../components/NotFound/NotFound';
import React from 'react';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
      </Head>
      <NotFound />
    </>
  );
};
export default NotFoundPage;
