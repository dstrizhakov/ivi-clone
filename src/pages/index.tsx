import Head from 'next/head';
import React, { FC } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <MainPageDescription />
      <Carousel title={'Зарубежные сериалы'} route={'/'} />
      <Carousel title={'Приключения'} route={'/'} showAll />
    </>
  );
};

export default Home;
