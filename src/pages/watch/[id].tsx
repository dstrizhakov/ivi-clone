import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';
import { useFetchOneFilmQuery } from '@/services/movie.api';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader';
const Movie = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const { data: movie, isLoading, error } = useFetchOneFilmQuery({ id });
  const { t, i18n } = useTranslation();
  if (error) return <NotFoundPage />;
  const genres = movie?.genres?.length ? movie?.genres[0] : '';
  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    {
      name:
        (i18n.language == 'ru'
          ? genres || genres[0]?.genreName
          : genres[0]?.genreNameEn || genres) || 'Жанры',
      path: genres.length ? `/movies/${genres[0]}` : '/movies',
    },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en'
            ? `Movie ${movie?.originalTitle || movie?.enName}`
            : `Фильм ${movie?.title || movie?.name}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      {isLoading ? <Loader /> : <WatchPage movie={movie} />}
    </>
  );
};

export default Movie;
