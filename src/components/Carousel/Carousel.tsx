import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { MdArrowForwardIos } from 'react-icons/md';
import { CarouselProps } from '@/components/Carousel/Carousel.props';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import ShowAll from '@/components/Card/ShowAll';
import NextArrow from '@/components/Carousel/Arrows/NextArrow';
import PrevArrow from '@/components/Carousel/Arrows/PrevArrow';

const Carousel: FC<CarouselProps> = ({
  title,
  route,
  showAll = false,
  children,
  settings,
}): JSX.Element => {
  if (!settings)
    settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      draggable: true,
      lazyLoad: 'progressive',
      slidesToScroll: 6,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1095,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

  return (
    <div className={styles.carousel}>
      {title && (
        <div>
          <Link href={route || ''} className={styles.title}>
            <div title={title}>
              <Htag tag={'h4'}>{title}</Htag>
            </div>
            <MdArrowForwardIos />
          </Link>
          <div />
        </div>
      )}
      <Slider {...settings}>
        {children}
        {showAll && (
          <Link href={route || ''}>
            <ShowAll />
          </Link>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
