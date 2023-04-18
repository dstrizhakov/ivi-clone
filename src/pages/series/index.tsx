import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import SeriesPageDescription from '@/components/SeriesPage/SeriesPageDescription';

const Series = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/' },
    { name: 'Сериалы', path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>Смотреть сериалы онлайн</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <SeriesPageDescription />
    </>
  );
};

export default Series;
