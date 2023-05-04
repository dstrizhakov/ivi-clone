import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';

const Movie = ({ movie }) => {
  const { t, i18n } = useTranslation();
  if (!movie) return <NotFoundPage />;

  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    { name: movie.genres[0], path: '/movies' },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en' ? movie.enName && `Movie ${movie.enName}` : `Фильм ${movie.name}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      <WatchPage movie={movie} />
    </>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const movie = moviesData.find((m: IMovie) => context.params.id == m.id) || null;
  return {
    props: {
      movie: movie,
    },
  };
}
