import Head from 'next/head';
import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/components/Card/Card';
import { wrapper } from '@/store/store';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { movies } = useSelector((state) => state.movieReducer);
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Carousel title={t('carousels.foreign-series')} route={'/movies'}>
        {movies.slice(0, 15).map((card) => (
          <Card card={card} star book find block key={card.id} />
        ))}
      </Carousel>
      <Carousel title={t('carousels.adventures')} route={'/movies'} showAll>
        {movies.slice(0, 15).map((card) => (
          <Card card={card} star book find block key={card.id} />
        ))}
      </Carousel>
    </>
  );
}

//.. тут будем проверять авторизован ли пользователь и сохранять данные о нем
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    console.log('CONTEXT', context);
    console.log('STORE', store);
    return { props: {} };
  }
);
