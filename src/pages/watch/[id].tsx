import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';
import { useFetchOneMovieQuery } from '@/services/movie.api';
import { useRouter } from 'next/router';

const Movie = () => {
  const router = useRouter();
  const { data: movie, error, isLoading } = useFetchOneMovieQuery(router.query.id);
  const { t, i18n } = useTranslation();
  if (error) return <NotFoundPage />;
  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    { name: movie.filmGenres[0], path: '/movies' },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en'
            ? movie.originalTitle && `Movie ${movie.originalTitle}`
            : `Фильм ${movie.title}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      {!isLoading && <WatchPage movie={movie} />}
    </>
  );
};

export default Movie;
