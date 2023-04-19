import { movies } from '@/mock/movies';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';
import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const Movie = () => {
  const router = useRouter();
  const movie = movies.find((m: IMovie) => router.asPath === `/watch/${m.id}`);

  const breadcrumbs = [
    { name: 'Фильмы', path: '/movies' },
    { name: 'Поджанр', path: '/movies' },
    { name: movie.name, path: '/movies' },
  ];
  if (!movie) return <NotFoundPage />;
  return (
    <>
      <Head>
        <title>{`Фильм ${movie.name}`}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <WatchPage movie={movie} />
    </>
  );
};

export default Movie;
