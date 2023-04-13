import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { P } from '@/components/P/P';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';

const Card: FC<CardProps> = ({ card, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      <Link href={'/'}>
        <div className={styles.imageSection}>
          <img src={card.img} alt={card.name} />
          <div className={styles.props}>
            <div className={styles.btns}>
              <Button>svg</Button>
              <Button>svg</Button>
              <Button>svg</Button>
              <Button>svg</Button>
            </div>
            <div className={styles.info}>
              <span>2020, США, Детективы</span>
              <span>93 минуты</span>
            </div>
          </div>
        </div>
        <div className={styles.textSection}>
          <P>{card.name.length > 15 ? `${card.name.slice(0, 15)}...` : card.name}</P>
        </div>
      </Link>
    </div>
  );
};

export default Card;
