import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import AnimationPageDescription from '@/components/AnimationPage/AnimationPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/components/Filters/Filters';
import Grid from '@/components/Grid/Grid';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Loader from '@/components/Loader/Loader';

const Index = () => {
  const { t } = useTranslation();
  const { data: movies, isLoading, error } = useFetchAllFilmsQuery({});

  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.animation'), path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.animation') || 'Мультфильмы смотреть онлайн'}</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <AnimationPageDescription />
      <Filters />
      {(isLoading || error) && <Loader />}
      {!isLoading && <Grid array={movies?.length ? movies : new Array(10)} />}
    </>
  );
};

export default Index;
