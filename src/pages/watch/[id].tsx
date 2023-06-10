import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';
import { useFetchOneFilmQuery } from '@/services/movie.api';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader';
import { moviesData } from '@/mock/moviesData';

const Movie = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const { data: movie, isLoading } = useFetchOneFilmQuery({ id });

  const { t, i18n } = useTranslation();
  const caughtMovie = movie?.id ? movie : moviesData[0];
  if (!caughtMovie?.id) return <NotFoundPage />;
  const genres = movie?.genres?.length ? movie?.genres[0] : '';
  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    {
      name: (i18n.language == 'ru' ? genres[0]?.genreName : genres[0]?.genreNameEn) || 'Жанры',
      path: genres.length ? `/movies/${genres[0]}` : '/movies',
    },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en'
            ? movie?.originalTitle && `Movie ${caughtMovie?.originalTitle}`
            : `Фильм ${caughtMovie?.title}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      {isLoading && <Loader />}
      {!isLoading && <WatchPage movie={caughtMovie} />}
    </>
  );
};

export default Movie;
