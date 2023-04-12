'use client';

import React from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import { P } from '@/components/P/P';
import Link from 'next/link';

const Card: React.FC<CardProps> = ({ card, ...props }) => {
  if (card.id === 0)
    return (
      <div className={styles.card} {...props}>
        <div className={styles.img}>
          <div className={styles.imgContainer}>
            <Link href={'#'}>
              <P>{card.name}</P>
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <Link className={styles.card} href={'#'}>
      <div className={styles.img}>
        <div className={styles.imgContainer}>
          <img
            src="https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85"
            alt={card.name}
          />
        </div>
      </div>
      <P>{card.name}</P>
      <P>Бесплатно</P>
    </Link>
  );
};

export default Card;
