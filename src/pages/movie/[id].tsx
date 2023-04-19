import { MovieInfo } from '@/components/Movie/Movie';
import { movies } from '@/mock/movies';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import React from 'react';

const Movie = () => {
  const router = useRouter();
  const movie = movies.find((m: IMovie) => router.asPath === `/movie/${m.id}`);

  const breadcrumbs = [
    { name: 'Фильмы', path: '/movies' },
    { name: movie.name, path: '/movies' },
  ];
  return (
    <>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
