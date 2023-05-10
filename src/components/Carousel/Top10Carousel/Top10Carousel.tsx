import React, { FC } from 'react';
import { NextArrow } from '@/components/Carousel/NextArrow';
import { PrevArrow } from '@/components/Carousel/PrevArrow';
import styles from './Top10Carousel.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import top10 from '@/../public/top10/top10.svg';

import { Htag } from '@/components/Htag/Htag';
import { carouselMock } from '@/mock/carouselMocks';

const T10Card: FC = (card): JSX.Element => {
  return (
    <div>
      <div>
        <img src={card.img} alt={card.name} />
      </div>
      <div>
        <div>
          <p>Логотип</p>
        </div>
      </div>
    </div>
  );
};

const Top10Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    draggable: true,
    lazyLoad: 'progressive',
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.title}>
          <Image src={top10} alt={'top10'} />
          <Htag tag={'h3'}>за неделю</Htag>
        </div>
        <Slider {...settings}>
          {[...carouselMock].splice(0, 10).map((i) => (
            <T10Card card={i} key={i.id} alt={'asd'} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Top10Carousel;
