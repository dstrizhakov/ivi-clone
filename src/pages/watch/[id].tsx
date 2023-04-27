import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';
import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Movie = () => {
  const router = useRouter();
  const id = +router.query.id;
  const movie = moviesData.find((m: IMovie) => id == m.id);
  if (!movie) return <NotFoundPage />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    { name: t('categories.subgenres'), path: '/movies' },
    { name: i18next.language == 'en' ? movie.enName : movie.name, path: '' },
  ];
  return (
    <>
      <Head>
        <title>
          {i18next.language == 'en'
            ? movie.enName && `Movie ${movie.enName}`
            : `Фильм ${movie.name}`}
        </title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <WatchPage id={id} />
    </>
  );
};

export default Movie;
