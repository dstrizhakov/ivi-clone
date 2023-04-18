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

const Card: FC<CardProps> = ({ card }) => {
  const [starred, setStarred] = useState<boolean>(false);
  const [booked, setBooked] = useState<boolean>(false);
  const book = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBooked((booked) => !booked);
  };
  const finder = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };
  const star = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setStarred((starred) => !starred);
  };
  const block = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <div className={styles.card}>
      <Link href={`/`}>
        <div className={styles.imageSection}>
          <img src={card.img} alt={card.name} />
          <div className={styles.props}>
            <div className={styles.btns}>
              <Button size={'L'} onClickCapture={(e) => book(e)}>
                {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
              </Button>
              <Button size={'L'} onClickCapture={(e) => finder(e)}>
                <IoColorWandOutline className={styles.mirrored} />
              </Button>
              <Button size={'L'} onClickCapture={(e) => star(e)}>
                {starred ? <AiFillStar /> : <AiOutlineStar />}
              </Button>
              <Button size={'L'} onClickCapture={(e) => block(e)}>
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
    </div>
  );
};

export default Card;
