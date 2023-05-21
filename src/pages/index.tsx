import Head from 'next/head';
import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/components/Card/Card';
import { wrapper } from '@/store/store';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import { useFetchAllMoviesQuery } from '@/services/movie.api';
import CardLoader from '@/components/Card/CardLoader';

const Home = () => {
  const { data: movies, error, isLoading } = useFetchAllMoviesQuery({});

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      {!error && !isLoading && (
        <Carousel title={t('carousels.foreign-series')} route={'/movies'}>
          {movies.slice(0, 15).map((card) => (
            <Card card={card} star book find block key={card.id} />
          ))}
        </Carousel>
      )}
      <Carousel title={t('carousels.adventures')} route={'/movies'}>
        {[...new Array(15)].map((i, index) => (
          <CardLoader key={index} />
        ))}
      </Carousel>
      {/*<Top10Carousel />*/}
      {!error && (
        <Carousel title={t('carousels.adventures')} route={'/movies'}>
          {!isLoading
            ? movies.map((card) => <Card card={card} star book find block key={card.id} />)
            : [...new Array(15)].map((i, index) => <CardLoader key={index} />)}
        </Carousel>
      )}
    </>
  );
};

export default Home;

//.. тут будем проверять авторизован ли пользователь и сохранять данные о нем
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // console.log('CONTEXT', context);
    // console.log('STORE', store);
    return { props: {} };
  }
);
