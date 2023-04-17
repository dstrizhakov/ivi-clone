import Head from 'next/head';
import React, { FC } from 'react';
import Description from '@/components/Description/Description';
import Carousel from '@/components/Carousel/Carousel';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Description />
      <Carousel title={'Зарубежные сериалы'} route={'/'} />
      <Carousel title={'Приключения'} route={'/'} showAll />
    </>
  );
};

export default Home;
