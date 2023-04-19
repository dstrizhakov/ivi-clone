import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Movie } from '../../mock/movie';
import WatchPage from '@/components/WatchPage/WatchPage';

const Watch = () => {
  const router = useRouter();
  //тут получаем данные о фильме с backend
  console.log(`Путь: ${router.asPath}`);

  return (
    <>
      <Head>
        <title>{`Фильм ${Movie.name}`}</title>
      </Head>
      <WatchPage item={Movie} />
    </>
  );
};

export default Watch;
