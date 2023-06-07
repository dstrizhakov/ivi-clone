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
import Top10Carousel from '@/components/Carousel/Top10Carousel/Top10Carousel';
import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import Loader from '@/components/Loader/Loader';

const Home = () => {
  const { data: movies } = useFetchAllMoviesQuery({});

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Carousel title={t('carousels.foreign-series')} route={'/movies'}>
        {(movies?.length ? movies : [...new Array(15)]).map((card, index) => (
          <Card card={card} star book find block key={card?.id || index} />
        ))}
      </Carousel>
      <Top10Carousel data={moviesData.slice(0, 10)} />
      <Top10Carousel data={movies?.length ? movies : [...new Array(10)]} />

      {movies?.length ? (
        <Carousel
          title={t('carousels.adventures')}
          route={'/movies'}
          showAll={Boolean(movies?.length)}
        >
          {movies.map((card: IMovie, index: number) => (
            <Card card={card} star book find block key={card?.id || index} />
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}

      <Carousel title={t('carousels.adventures')} route={'/movies'} showAll>
        {moviesData.map((card) => (
          <Card card={card} star book find block key={card.id} />
        ))}
      </Carousel>
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
