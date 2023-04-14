import React, { FC, useState } from 'react';
import styles from './Carousel.module.scss';
import Card from '../Card/Card';
import { iMovie } from '@/components/Card/Card.props';
import { Htag } from '@/components/Htag/Htag';
import Link from 'next/link';
import { CarouselProps } from '@/components/Carousel/Carousel.props';
import { Button } from '@/components/Button/Button';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const long = 'longlonglonglong',
  short = 'shortshort';
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

export const Carousel: FC<CarouselProps> = ({ title, ...props }) => {
  const cards: iMovie[] = [...arr, { id: 0, name: 'show all', img: 'none' }];

  const [start, setStart] = useState(0);
  const width = 5;

  const next = () => {
    start < Math.floor(cards.length / width) - 2
      ? setStart((start) => start + (width - 1) / width)
      : setStart(() => Math.floor(cards.length / width) - 1 + (cards.length % width) / width);
  };

  const prev = () => {
    start > 1 ? setStart((start) => start - (width - 1) / width) : setStart(() => 0);
  };

  return (
    <div className={styles.carouselBlock} {...props}>
      <Link href={'/'}>
        <Htag tag={'h4'} style={{ display: 'flex', alignItems: 'center' }}>
          {title} <MdArrowForwardIos />
        </Htag>
      </Link>
      <div className={styles.carousel}>
        <div className={styles.viewport} style={{ transform: `translateX(-${start * 100}%)` }}>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
        <span className={styles.arrow}>
          <div className={styles.right}>
            <Button size={'L'} onClick={() => prev()} disabled={start <= 0}>
              <MdArrowBackIosNew size={'Large'} />
            </Button>
          </div>
        </span>
        <span className={styles.arrow}>
          <div className={styles.left}>
            <Button
              size={'L'}
              onClick={() => next()}
              disabled={
                start >= Math.floor(cards.length / width) - 1 + (cards.length % width) / width
              }
            >
              <MdArrowForwardIos size={'Large'} />
            </Button>
          </div>
        </span>
      </div>
    </div>
  );
};
