import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import AnimationPageDescription from '@/components/AnimationPage/AnimationPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/components/Filters/Filters';
import Grid from '@/components/Grid/Grid';
import { moviesData } from '@/mock/moviesData';
import { useFetchAllMoviesQuery } from '@/services/movie.api';

const Index = () => {
  const { t } = useTranslation();
  const { data: movies } = useFetchAllMoviesQuery({});

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
      <Grid array={movies} />
      <Grid array={moviesData} />
    </>
  );
};

export default Index;
