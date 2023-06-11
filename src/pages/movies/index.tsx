import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import MoviesPageDescription from '@/components/MoviesPage/MoviesPageDescription';
import Filters from '../../components/Filters/Filters';
import { useTranslation } from 'react-i18next';
import Grid from '@/components/Grid/Grid';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Loader from '@/components/Loader/Loader';

const Movies = () => {
  const { data: movies, isLoading, error } = useFetchAllFilmsQuery({});
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.movies'), path: '/movies' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.movies')}</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MoviesPageDescription />
      <Filters />
      {(isLoading || error) && <Loader />}
      {!isLoading && <Grid array={movies?.length ? movies : new Array(10)} />}
    </>
  );
};

export default Movies;
