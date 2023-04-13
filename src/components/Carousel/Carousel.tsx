import React, { useState } from 'react';
import styles from './Carousel.module.scss';
import Card from '../Card/Card';
import { iMovie } from '@/components/Card/Card.props';
import { Htag } from '@/components/Htag/Htag';
import Link from 'next/link';
import { CarouselProps } from '@/components/Carousel/Carousel.props';

const arr = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
  { id: 10, name: 'longlonglonglong' },
  { id: 11, name: 'shortshort' },
  { id: 12, name: '12' },
  { id: 13, name: '13' },
  { id: 14, name: '14' },
  { id: 15, name: '15' },
  { id: 16, name: '16' },
  { id: 17, name: '17' },
];

const cards: iMovie[] = [...arr.splice(0, 16), { id: 0, name: 'show all' }];
const width = 5;

export const Carousel: React.FC<CarouselProps> = ({ children, amount = 16, ...props }) => {
  const [start, setStart] = useState(0);

  const next = () => {
    start < Math.floor(cards.length / width) - 2
      ? setStart((start) => start + (width - 1) / width)
      : setStart(() => Math.floor(cards.length / width) - 1 + (cards.length % width) / width);
  };

  const prev = () => {
    start > 1 ? setStart((start) => start - (width - 1) / width) : setStart(() => 0);
  };

  return (
    <div {...props}>
      <Link href={'#'}>
        <Htag tag={'h4'}>{children}</Htag>
      </Link>
      <div className={styles.carousel}>
        <div className={styles.inner} style={{ transform: `translateX(-${start * 100}%)` }}>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={() => prev()} disabled={start <= 0}>
            &lt;
          </button>
          <button
            className={styles.arrow}
            onClick={() => next()}
            disabled={
              start >= Math.floor(cards.length / width) - 1 + (cards.length % width) / width
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
