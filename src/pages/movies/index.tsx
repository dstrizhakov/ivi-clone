import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import MoviesPageDescription from '@/components/MoviesPage/MoviesPageDescription';
import Filters from '../../components/Filters/Filters';

const Movies = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/' },
    { name: 'Фильмы', path: '/movies' },
  ];
  return (
    <>
      <Head>
        <title>Смотреть фильмы онлайн</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MoviesPageDescription />
      <Filters />
    </>
  );
};

export default Movies;
