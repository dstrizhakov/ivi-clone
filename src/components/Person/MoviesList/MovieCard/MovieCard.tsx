import React, { FC } from 'react';
import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.props';

import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';

const MovieCard: FC<MovieCardProps> = ({ card }) => {
  const { t } = useTranslation();
  return (
    <Link href={`/watch/${card.id}`} className={styles.card} key={card.id}>
      <div className={styles.info}>
        <img src={card.card_image} alt="" className={styles.card_image} />
        {/*todo: change to Image*/}
        <div>
          <P color={'white'}>{card.year}</P>
          <P color={'white'}>{card.title}</P>
          <P size={'S'}>
            {t('categories.rating')}: {card.rating}
          </P>
        </div>
      </div>
      <Button>{t('buttons.read-more')}</Button>
    </Link>
  );
};

export default MovieCard;
