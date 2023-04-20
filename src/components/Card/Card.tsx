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
        <img src={card.img} alt={card.name} />
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
              7,7
              <div className={styles.graphs}>
                <BarGraph width={80} />
                <BarGraph width={73} />
                <BarGraph width={62} />
                <BarGraph width={98} />
              </div>
            </div>
            <div className={styles.singleGraph}>
              <span>актёры</span>
              <BarGraph width={67} />
            </div>
            <div className={styles.info__text}>
              <div className={styles.info__row}>2019-2021, Россия, Драмы</div>
              <div className={styles.info__row}>1 сезон</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textSection}>
        <P>{card.name}</P>
      </div>
    </Link>
  );
};

export default Card;
