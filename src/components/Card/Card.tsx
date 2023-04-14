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
import { AiFillStar } from 'react-icons/ai';
import { MdBlock } from 'react-icons/md';
import BarGraph from '@/components/BarGraph/BarGraph';

const Card: FC<CardProps> = ({ card, ...props }) => {
  const [starred, setStarred] = useState<boolean>(false);
  const [booked, setBooked] = useState<boolean>(false);
  const book = () => {
    setBooked((booked) => !booked);
  };
  const finder = () => {
    console.log('find similar');
  };
  const star = () => {
    setStarred((starred) => !starred);
  };
  const block = () => {
    console.log('blocked');
  };
  return (
    <div className={styles.card} {...props}>
      <div className={styles.imageSection}>
        <Link href={'/'}>
          <img src={card.img} alt={card.name} />
        </Link>
        <div className={styles.props}>
          <div className={styles.btns}>
            <Button size={'L'} onClick={() => book()}>
              {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
            </Button>
            <Button size={'L'} onClick={() => finder()}>
              <IoColorWandOutline className={styles.mirrored} />
            </Button>
            <Button size={'L'} onClick={() => star()}>
              {starred ? <AiFillStar /> : <AiOutlineStar />}
            </Button>
            <Button size={'L'} onClick={() => block()}>
              <MdBlock />
            </Button>
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
              <span>criteria</span>
              <BarGraph width={67} />
            </div>
            <div className={styles.info__text}>
              <div>years, country, genre,</div>
              <div>duration</div>
            </div>
          </div>
        </div>
      </div>
      <Link href={'/'}>
        <div className={styles.textSection}>
          <P>{card.name.length > 15 ? `${card.name.slice(0, 15)}...` : card.name}</P>
        </div>
      </Link>
    </div>
  );
};

export default Card;
