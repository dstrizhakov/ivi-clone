import Head from 'next/head';
import React, { FC } from 'react';
import { Carousel } from '@/components/Carousel/Carousel';
import Description from '@/components/Description/Description';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Description />
      <Carousel title={'Зарубежные сериалы'} />
    </>
  );
};

export default Home;
