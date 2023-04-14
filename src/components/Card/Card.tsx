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
      <Link href={'/'}>
        <div className={styles.imageSection}>
          <img src={card.img} alt={card.name} />
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
                <div className={styles.ratingsModule}>
                  7,7
                  <div className={styles.graphs}>
                    <BarGraph width={80} baseWidth={'25px'} />
                    <BarGraph width={73} baseWidth={'25px'} />
                    <BarGraph width={62} baseWidth={'25px'} />
                    <BarGraph width={98} baseWidth={'25px'} />
                  </div>
                </div>
                <div>
                  <span>criteria</span>
                  <BarGraph width={67} baseWidth={'150%'} />
                </div>
              </div>
              <div>years, country, genre,</div>
              <div>duration</div>
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
