import React, { FC } from 'react';
import { CardProps } from './Card.props';
import { P } from '@/components/P/P';
import Link from 'next/link';
import BarGraph from '@/components/BarGraph/BarGraph';
import i18next from 'i18next';
import AddToFavoritesButton from '@/components/Card/CardButtons/AddToFavoritesButton';
import RateButton from '@/components/Card/CardButtons/RateButton';
import FindSimilarButton from '@/components/Card/CardButtons/FindSimilarButton';
import BlockButton from '@/components/Card/CardButtons/BlockButton';
import styles from './Card.module.scss';
import Image from 'next/image';

const Card: FC<CardProps> = ({
  card,
  hover = true,
  star = false,
  book = false,
  find = false,
  block = false,
  ...props
}): JSX.Element => {
  return (
    <Link href={`/watch/${card.id}`} className={styles.card} draggable="false" {...props}>
      <div className={`${styles.imageSection} ${hover && styles.hover}`}>
        <Image
          src={card.card_image}
          alt={card.title}
          width={234}
          height={360}
          quality={85}
          priority
        />
        <div className={styles.props}>
          <div className={styles.btns__container}>
            <div className={styles.btns}>
              {book && <AddToFavoritesButton />}
              {find && <FindSimilarButton />}
              {star && <RateButton />}
              {block && <BlockButton />}
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.ratings}>
              {card.rating}
              <div className={styles.graphs}>
                <BarGraph width={+card.rating[0] * 0.7 * 10 - 0.2} />
                <BarGraph width={+card.rating[0] * 0.9 * 10 - 0.2} />
                <BarGraph width={+card.rating[0] * 1.2 * 10 - 0.2} />
                <BarGraph width={+card.rating[0] * 0.8 * 10 - 0.2} />
              </div>
            </div>
            <div className={styles.singleGraph}>
              <span>{i18next.language == 'en' ? 'actors' : 'актёры'}</span>
              <BarGraph width={+card.rating[0] * 10 - 0.2} />
            </div>
            <div className={styles.info__text}>
              <div className={styles.info__row}>
                {card.year}, {card.countries[0]}, {card.genres[0]}
              </div>
              <div className={styles.info__row}>{card.duration}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.textSection}
        title={
          i18next.language == 'en'
            ? card.originalTitle
              ? card.originalTitle
              : card.title
            : card.title
        }
      >
        <P>
          {i18next.language == 'en'
            ? card.originalTitle
              ? card.originalTitle
              : card.title
            : card.title}
        </P>
      </div>
    </Link>
  );
};

export default Card;
