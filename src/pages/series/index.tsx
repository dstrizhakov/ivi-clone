import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import SeriesPageDescription from '@/components/SeriesPage/SeriesPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/components/Filters/Filters';
import Grid from '@/components/Grid/Grid';
import { moviesData } from '@/mock/moviesData';
import { useFetchAllMoviesQuery } from '@/services/movie.api';
import Loader from '@/components/Loader/Loader';

const Series = () => {
  const { t } = useTranslation();
  const { data: movies, isLoading } = useFetchAllMoviesQuery({});

  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.series'), path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.series') || 'Сериалы смотреть онлайн'}</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <SeriesPageDescription />
      <Filters />
      {isLoading ? <Loader /> : <Grid array={movies} />}
      <Grid array={moviesData} />
    </>
  );
};

export default Series;
