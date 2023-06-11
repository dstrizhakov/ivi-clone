import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import SeriesPageDescription from '@/components/SeriesPage/SeriesPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/components/Filters/Filters';
import Grid from '@/components/Grid/Grid';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Loader from '@/components/Loader/Loader';

const Series = () => {
  const { t } = useTranslation();
  const { data: movies, isLoading, error } = useFetchAllFilmsQuery({});
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
      {(isLoading || error) && <Loader />}
      {!isLoading && <Grid array={movies?.length ? movies : new Array(10)} />}
    </>
  );
};

export default Series;
