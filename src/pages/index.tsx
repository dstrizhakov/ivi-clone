import Head from 'next/head';
import React, { useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import { wrapper } from '@/store/store';
import { GetServerSideProps } from 'next';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/components/Card/Card';
import RatingModal from '@/components/Card/RatingModal';
import { useSelector } from 'react-redux';

export default function Home() {
  const [isRatingOpen, setIsRatingOpen] = useState<boolean>(false);
  const { movies } = useSelector((state) => state.movieReducer);
  return (
    <>
      <Head>
        <title>
          Главная
          {/*Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем*/}
          {/*качестве*/}
        </title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Carousel title={'Зарубежные сериалы'} route={'/'}>
        {movies.slice(0, 15).map((card) => (
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
        {movies.slice(0, 15).map((card) => (
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
