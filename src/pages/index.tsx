import Head from 'next/head';
import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import { wrapper } from '@/store/store';
import { GetServerSideProps } from 'next';

export default function Home() {
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
}

//.. тут будем проверять авторизован ли пользователь и сохранять данные о нем
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // получаем токен из куков
    // const movies = context.params?.movies;
    // console.log(movies);
    console.log(store);
    return { props: {} };
  }
);
