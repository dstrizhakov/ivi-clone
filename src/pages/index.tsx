import Head from 'next/head';
import React, { FC } from 'react';
import { Carousel } from '@/components/Carousel/Carousel';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <Carousel title={'Зарубежные сериалы'} />
    </>
  );
};

export default Home;
