import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Movie } from '../../mock/movie';
import WatchPage from '@/components/WatchPage/WatchPage';
import { movies } from '@/mock/movies';
import { IMovie } from '@/types/types';

const Watch = () => {
  const router = useRouter();
  //тут получаем данные о фильме с backend
  console.log(`Путь: ${router.asPath}`);

  return (
    <>
      <Head>
        <title>{`Фильм ${Movie.name}`}</title>
      </Head>
      {movies.map((m: IMovie) => {
        if (router.asPath === `/watch/${m.id}`) return <WatchPage item={m} />;
      })}
    </>
  );
};

export default Watch;
