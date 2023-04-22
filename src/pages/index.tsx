import Head from 'next/head';
import React, { useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import { wrapper } from '@/store/store';
import { GetServerSideProps } from 'next';
import { authApi } from '@/services/auth.api';
import { carouselMock } from '@/mock/carouselMocks';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/components/Card/Card';
import RatingModal from '@/components/Card/RatingModal';

export default function Home() {
  const [isRatingOpen, setIsRatingOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Carousel title={'Зарубежные сериалы'} route={'/'}>
        {carouselMock.map((card) => (
          <Card
            card={card}
            openRating={() => setIsRatingOpen(true)}
            star
            book
            find
            block
            key={card.id}
          />
        ))}
      </Carousel>
      <Carousel title={'Приключения'} route={'/'} star book find block showAll>
        {carouselMock.map((card) => (
          <Card
            card={card}
            openRating={() => setIsRatingOpen(true)}
            star
            book
            find
            block
            key={card.id}
          />
        ))}
      </Carousel>

      <RatingModal isOpen={isRatingOpen} closeModal={() => setIsRatingOpen(() => false)} />
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
