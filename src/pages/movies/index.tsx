import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import MoviesPageDescription from '@/components/MoviesPage/MoviesPageDescription';
import Filters from '../../components/Filters/Filters';
import { useTranslation } from 'react-i18next';
import Grid from '@/components/Grid/Grid';
import { useSelector } from 'react-redux';

const Movies = () => {
  const { t } = useTranslation();
  const { movies } = useSelector((state) => state.movieReducer);
  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.movies'), path: '/movies' },
  ];
  return (
    <>
      <Head>
        <title> {t('title.movies')} </title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MoviesPageDescription />
      <Filters />
      <Grid array={movies} />
    </>
  );
};

export default Movies;
