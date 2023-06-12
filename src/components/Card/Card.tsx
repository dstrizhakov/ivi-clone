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
import CardLoader from '@/components/Card/CardLoader';

const Card: FC<CardProps> = ({
  card,
  hover = true,
  star = false,
  book = false,
  find = false,
  block = false,
  ...props
}): JSX.Element => {
  if (!card?.id) return <CardLoader />;
  const {
    id,
    card_image,
    rating,
    country,
    countries,
    genres,
    year,
    duration,
    originalTitle,
    title,
  } = card;
  const i18nTitle = i18next.language == 'en' ? originalTitle || title : title || '';
  const rate = rating?.length ? rating[0] : 9.0;
  return (
    <Link href={`/watch/${id}`} className={styles.card} draggable="false" {...props}>
      <div className={`${styles.imageSection} ${hover && styles.hover}`}>
        <Image
          src={card_image}
          alt={title || 'title'}
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
              {rate % 1 ? rate : `${rate}.0`}
              <div className={styles.graphs}>
                <BarGraph width={rate * 0.7 * 10 - 0.2} />
                <BarGraph width={rate * 0.9 * 10 - 0.2} />
                <BarGraph width={rate * 1.2 * 10 - 0.2} />
                <BarGraph width={rate * 0.8 * 10 - 0.2} />
              </div>
            </div>
            <div className={styles.singleGraph}>
              <span>{i18next.language == 'en' ? 'actors' : 'актёры'}</span>
              <BarGraph width={(rate || 9.0) * 10 - 0.2} />
            </div>
            <section className={styles.info__text}>
              <div className={styles.info__row}>
                {year && `${year}, `}
                {`${country || countries[0]}, `}
                {genres?.length && `${genres[0]}`}
              </div>
              <div className={styles.info__row}>{duration.hours}</div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.textSection} title={i18nTitle}>
        <P>{i18nTitle}</P>
      </div>
    </Link>
  );
};

export default Card;
