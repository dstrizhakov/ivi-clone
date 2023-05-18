import React, { FC } from 'react';
import NextArrow from '@/components/Carousel/NextArrow';
import PrevArrow from '@/components/Carousel/PrevArrow';
import styles from './Top10Carousel.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { Htag } from '@/components/Htag/Htag';
import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';

import top10 from '@/../public/top10/top10.svg';
import zero from '@/../public/top10/number0.svg';
import one from '@/../public/top10/number1.svg';
import two from '@/../public/top10/number2.svg';
import three from '@/../public/top10/number3.svg';
import four from '@/../public/top10/number4.svg';
import five from '@/../public/top10/number5.svg';
import six from '@/../public/top10/number6.svg';
import seven from '@/../public/top10/number7.svg';
import eight from '@/../public/top10/number8.svg';
import nine from '@/../public/top10/number9.svg';

const top = [
  <Image width={32} height={44} alt={`top1`} src={one} key={1} />,
  <Image width={32} height={44} alt={`top2`} src={two} key={2} />,
  <Image width={32} height={44} alt={`top3`} src={three} key={3} />,
  <Image width={32} height={44} alt={`top4`} src={four} key={4} />,
  <Image width={32} height={44} alt={`top5`} src={five} key={5} />,
  <Image width={32} height={44} alt={`top6`} src={six} key={6} />,
  <Image width={32} height={44} alt={`top7`} src={seven} key={7} />,
  <Image width={32} height={44} alt={`top8`} src={eight} key={8} />,
  <Image width={32} height={44} alt={`top9`} src={nine} key={9} />,
  <>
    <Image width={32} height={44} alt={`top1`} src={one} />
    <Image width={32} height={44} alt={`0`} src={zero} />
  </>,
];

interface iCard {
  card: IMovie;
  index: number;
}

const T10Card: FC<iCard> = ({ card, index, ...props }): JSX.Element => {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.card_image}>
        <Image src={card.card_image} alt={card.name} width={234} height={360} />
      </div>
      <div className={styles.fade} />
      <div className={styles.fade_footer} />
      <div className={styles.logo}>
        <div className={styles.logo_image}>{top[index]}</div>
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
    <div className={styles.carousel}>
      <div className={styles.title}>
        <Image src={top10} alt={'top10'} />
        <Htag tag={'h3'}>за неделю</Htag>
      </div>
      <Slider {...settings}>
        {moviesData.slice(0, 10).map((i: IMovie, index: number) => (
          <T10Card card={i} index={index} key={i.id} alt={'asd'} />
        ))}
      </Slider>
    </div>
  );
};

export default Top10Carousel;
