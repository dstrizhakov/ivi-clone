import Head from 'next/head';
import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/components/Card/Card';
import { useTranslation } from 'react-i18next';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Top10Carousel from '@/components/Carousel/Top10Carousel/Top10Carousel';
import { IMovie } from '@/types/types';
import Loader from '@/components/Loader/Loader';

const Home = () => {
  const { data: movies } = useFetchAllFilmsQuery({ limit: 15 });

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Top10Carousel data={movies} />
      <Carousel title={t('carousels.foreign-series')} route={'/movies'}>
        {(movies?.length ? movies : [...new Array(15)]).map((card, index) => (
          <Card card={card} star book find block key={card?.id || index} />
        ))}
      </Carousel>
      {movies?.length ? (
        <Carousel title={t('carousels.adventures')} route={'/movies'} showAll={movies?.length > 15}>
          {movies.map((card: IMovie, index: number) => (
            <Card card={card} star book find block key={card?.id || index} />
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
