import { MovieInfo } from '@/components/Movie/Movie';
import { movies } from '@/mock/movies';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import React from 'react';
import NotFoundPage from '@/pages/404';

const Movie = () => {
  const router = useRouter();
  const movie = movies.find((m: IMovie) => router.asPath === `/watch/${m.id}`) || false;

  const breadcrumbs = [
    { name: 'Фильмы', path: '/movies' },
    { name: 'Поджанр', path: '/movies' },
    { name: movie?.name, path: '/movies' },
  ];
  if (!movie) return <NotFoundPage />;
  return (
    <>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
