import React, { FC } from 'react';
import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.props';

import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';

const MovieCard: FC<MovieCardProps> = ({ card }) => {
  return (
    <Link href={`/watch/${card.id}`} className={styles.card} key={card.id}>
      <div className={styles.info}>
        <img src={card.img} alt="" className={styles.img} />
        <div>
          <P color={'white'}>{card.year}</P>
          <P color={'white'}>{card.name}</P>
          <P size={'S'}>Рейтинг Иви: {card.rating}</P>
        </div>
      </div>
      <Button>Подробнее</Button>
    </Link>
  );
};

export default MovieCard;
