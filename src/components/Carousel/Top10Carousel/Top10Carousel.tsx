import React, { FC } from 'react';
import NextArrow from '@/components/Carousel/Arrows/NextArrow';
import PrevArrow from '@/components/Carousel/Arrows/PrevArrow';
import styles from './Top10Carousel.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { Htag } from '@/components/Htag/Htag';
import { IMovie } from '@/types/types';
import { useTranslation } from 'react-i18next';
import { T10Card } from './Top10CarouselCard';
import top10 from '@/../public/top10/top10.svg';
import Link from 'next/link';
interface iCarousel {
  data: IMovie[];
}

const Top10Carousel: FC<iCarousel> = ({ data }) => {
  const { t } = useTranslation();
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
        <Link href={'/movies'}>
          <Image src={top10} alt={'top10'} />
        </Link>
        <Link href={'/movies'}>
          <Htag tag={'h3'}>{t('sections.during-week')}</Htag>
        </Link>
      </div>
      <Slider {...settings}>
        {(data?.length ? data : new Array(10).fill(0))
          .slice(0, 10)
          .map((card: IMovie, index: number) => (
            <T10Card card={card} index={index} key={card?.id || index} />
          ))}
      </Slider>
    </div>
  );
};

export default Top10Carousel;
