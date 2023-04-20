import Head from 'next/head';
import React, { FC, useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import Card from '@/components/Card/Card';
import RatingModal from '@/components/Card/RatingModal';
import { carouselMock } from '@/mock/carouselMocks';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';

const Home: FC = () => {
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
            star book find block
            key={card.id}
          />
        ))}
      </Carousel>
      <Carousel title={'Приключения'} route={'/'} star book find block showAll>
        {carouselMock.map((card) => (
          <Card
            card={card}
            openRating={() => setIsRatingOpen(true)}
            star book find block
            key={card.id}
          />
        ))}
      </Carousel>

      <RatingModal isOpen={isRatingOpen} closeModal={() => setIsRatingOpen(() => false)} />
    </>
  );
};

export default Home;
