import React, { FC } from 'react';
import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.props';

import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const MovieCard: FC<MovieCardProps> = ({ card }) => {
  const { t } = useTranslation();
  const { id, year, title, rating } = card;
  return (
    <Link href={`/watch/${id}`} className={styles.card} key={id}>
      <div className={styles.info}>
        <Image width={128} height={197} src={card.card_image} alt="" />
        <div>
          <P color={'white'}>{year}</P>
          <P color={'white'}>{title}</P>
          <P size={'S'}>
            {t('categories.rating')}: {rating}
          </P>
        </div>
      </div>
      <Button>{t('buttons.read-more')}</Button>
    </Link>
  );
};

export default MovieCard;
