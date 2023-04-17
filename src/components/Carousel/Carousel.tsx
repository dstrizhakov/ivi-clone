import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import Card from '../Card/Card';
import { Button } from '@/components/Button/Button';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { CarouselProps } from '@/components/Carousel/Carousel.props';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import ShowAll from '@/components/Card/ShowAll';

const long = 'long long long long long long',
  short = 'short';
const src1 =
  'https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85';
const src2 =
  'https://thumbs.dfs.ivi.ru/storage28/contents/0/8/3d2850061083ba6946ad877bc9102d.jpg/234x360/?q=85';
const arr = [
  { id: 1, name: long, img: src1 },
  { id: 2, name: long, img: src2 },
  { id: 3, name: short, img: src1 },
  { id: 4, name: short, img: src2 },
  { id: 5, name: long, img: src1 },
  { id: 6, name: long, img: src2 },
  { id: 7, name: short, img: src1 },
  { id: 8, name: short, img: src2 },
  { id: 9, name: long, img: src1 },
  { id: 10, name: long, img: src2 },
  { id: 11, name: short, img: src1 },
  { id: 12, name: short, img: src2 },
  { id: 13, name: long, img: src1 },
  { id: 14, name: long, img: src2 },
  { id: 15, name: short, img: src1 },
];

function NextArrow(props) {
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={props.onClick}>
      <Button
        size={'L'}
        appearance={'transparent'}
        disabled={props.className.split(' ')[2] === 'slick-disabled'}
      >
        <MdArrowForwardIos size={30} />
      </Button>
    </div>
  );
}

function PrevArrow(props) {
  return (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={props.onClick}>
      <Button
        size={'L'}
        appearance={'transparent'}
        disabled={props.className.split(' ')[2] === 'slick-disabled'}
      >
        <MdArrowBackIosNew size={30} />
      </Button>
    </div>
  );
}

const Carousel: FC<CarouselProps> = ({ title, route, showAll = false }) => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
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
          slidesToScroll: 3,
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
      <Link href={route} className={styles.title}>
        <Htag tag={'h4'}>{title}</Htag>
        <MdArrowForwardIos />
      </Link>
      <Slider ref={slider} {...settings}>
        {arr.map((card) => (
          <div key={card.id} className={styles.card}>
            <Card card={card} />
          </div>
        ))}
        {showAll && (
          <Link href={route}>
            <div className={styles.card}>
              <ShowAll />
            </div>
          </Link>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
