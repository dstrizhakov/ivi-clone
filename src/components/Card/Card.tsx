import React, { FC, useState } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { P } from '@/components/P/P';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { IoColorWandOutline } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
import { MdBlock } from 'react-icons/md';
import BarGraph from '@/components/BarGraph/BarGraph';
import { useRouter } from 'next/navigation';
import i18next from 'i18next';

const Card: FC<CardProps> = ({
  card,
  hover = true,
  openRating,
  star,
  book,
  find,
  block,
  ...props
}) => {
  const router = useRouter();
  const [booked, setBooked] = useState<boolean>(false);
  const [blocked, setBlocked] = useState<boolean>(false);

  const addToFavorite = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBooked((booked) => !booked);
  };
  const findSimilar = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    router.push('/movies');
  };
  const openRatingModal = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (openRating) {
      openRating();
    }
  };
  const blockMovie = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBlocked((blocked) => !blocked);
  };

  return (
    <Link href={`/watch/${card.id}`} className={styles.card} draggable="false" {...props}>
      <div className={`${styles.imageSection} ${hover && styles.hover}`}>
        <img src={card.card_image} alt={card.name} />
        <div className={styles.props}>
          <div className={styles.btns}>
            {book && (
              <Button size={'L'} onClick={(e) => addToFavorite(e)}>
                {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
              </Button>
            )}
            {find && (
              <Button size={'L'} onClick={(e) => findSimilar(e)}>
                <IoColorWandOutline className={styles.mirrored} />
              </Button>
            )}
            {star && (
              <Button size={'L'} onClick={(e) => openRatingModal(e)}>
                <AiOutlineStar />
              </Button>
            )}
            {block && (
              <Button size={'L'} onClick={(e) => blockMovie(e)}>
                {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
              </Button>
            )}
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
              <span>актёры</span>
              <BarGraph width={+card.rating[0] * 10 - 0.2} />
            </div>
            <div className={styles.info__text}>
              <div className={styles.info__row}>
                {card.year}, {card.countries}, {card.genres}
              </div>
              <div className={styles.info__row}>{card.duration}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.textSection}
        title={i18next.language == 'en' ? (card.enName ? card.enName : card.name) : card.name}
      >
        <P>{i18next.language == 'en' ? (card.enName ? card.enName : card.name) : card.name}</P>
      </div>
    </Link>
  );
};

export default Card;
