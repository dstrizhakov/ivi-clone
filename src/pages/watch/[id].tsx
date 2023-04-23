import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';
import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const Movie = () => {
  const router = useRouter();
  const id = +router.query.id;
  const movie = moviesData.find((m: IMovie) => id == m.id);
  if (!movie) return <NotFoundPage />;

  const breadcrumbs = [
    { name: 'Фильмы', path: '/movies' },
    { name: 'Поджанр', path: '/movies' },
    { name: movie.name, path: '' },
  ];
  return (
    <>
      <Head>
        <title>{`Фильм ${movie.name}`}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <WatchPage id={id} />
    </>
  );
};

export default Movie;
