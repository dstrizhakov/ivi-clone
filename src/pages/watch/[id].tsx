import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';
import { useFetchOneFilmQuery } from '@/services/movie.api';
import { useRouter } from 'next/router';

const Movie = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const { data: movie, error, isLoading } = useFetchOneFilmQuery({ id });

  const { t, i18n } = useTranslation();
  if (error) return <NotFoundPage />;
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
            ? movie?.originalTitle && `Movie ${movie?.originalTitle}`
            : `Фильм ${movie?.title}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      {!isLoading && movie && <WatchPage movie={movie} />}
    </>
  );
};

export default Movie;
