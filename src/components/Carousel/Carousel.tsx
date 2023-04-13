import React, { FC, useState } from 'react';
import styles from './Carousel.module.scss';
import Card from '../Card/Card';
import { iMovie } from '@/components/Card/Card.props';
import { Htag } from '@/components/Htag/Htag';
import Link from 'next/link';
import { CarouselProps } from '@/components/Carousel/Carousel.props';

const src1 =
  'https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85';
const src2 =
  'https://thumbs.dfs.ivi.ru/storage28/contents/0/8/3d2850061083ba6946ad877bc9102d.jpg/234x360/?q=85';
const arr = [
  { id: 1, name: '1', img: src1 },
  { id: 2, name: '2', img: src2 },
  { id: 3, name: '3', img: src1 },
  { id: 4, name: '4', img: src2 },
  { id: 5, name: '5', img: src1 },
  { id: 6, name: '6', img: src2 },
  { id: 7, name: '7', img: src1 },
  { id: 8, name: '8', img: src2 },
  { id: 9, name: '9', img: src1 },
  { id: 10, name: 'longlonglonglong', img: src2 },
  { id: 11, name: 'shortshort', img: src1 },
  { id: 12, name: '12', img: src2 },
  { id: 13, name: '13', img: src1 },
  { id: 14, name: '14', img: src2 },
  { id: 15, name: '15', img: src1 },
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
    <div {...props} style={{ width: '100%' }}>
      <Link href={'#'}>
        <Htag tag={'h4'}>{title} &gt;</Htag>
      </Link>
      <div className={styles.carousel}>
        <div className={styles.viewport}>
          <div
            className={styles.viewportInner}
            style={{ transform: `translateX(-${start * 100}%)` }}
          >
            {cards.map((card) => (
              <Card card={card} key={card.id} style={{ width: '20%' }} />
            ))}
          </div>
        </div>
        <span className={`${styles.arrow} ${styles.right}`}>
          <button onClick={() => prev()} disabled={start <= 0}>
            &lt;
          </button>
        </span>

        <span className={`${styles.arrow} ${styles.left}`}>
          <button
            onClick={() => next()}
            disabled={
              start >= Math.floor(cards.length / width) - 1 + (cards.length % width) / width
            }
          >
            &gt;
          </button>
        </span>
      </div>
    </div>
  );
};
