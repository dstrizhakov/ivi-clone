import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';
import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';

const Movie = () => {
  const { t, i18n } = useTranslation();
  console.log(useTranslation());
  const router = useRouter();
  const movie = moviesData.find((m: IMovie) => +router.query.id == m.id);
  if (!movie) return <NotFoundPage />;

  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    { name: movie.genres[0], path: '/movies' },
    { name: i18n.language == 'en' ? movie.enName : movie.name, path: '' },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en' ? movie.enName && `Movie ${movie.enName}` : `Фильм ${movie.name}`}
        </title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <WatchPage id={movie.id} />
    </>
  );
};

export default Movie;
