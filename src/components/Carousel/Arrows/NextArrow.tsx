import styles from './Arrows.module.scss';
import { Button } from '@/components/Button/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import React, { FC } from 'react';
import { BtnA, BtnS } from '@/components/Button/Button.props';

export type NextArrowProps = {
  variant?: 'promo';
};

const NextArrow: FC<NextArrowProps> = ({ variant, ...props }): JSX.Element => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={`${styles.arrow} ${variant === 'promo' ? styles.nextPromo : styles.next}`}>
        <Button
          size={BtnS.L}
          appearance={BtnA.transparent}
          disabled={className.split(' ')[2] === 'slick-disabled'}
        >
          <MdArrowForwardIos size={30} />
        </Button>
      </div>
      {variant == 'promo' && <div className={styles.next_banner} />}
    </div>
  );
};

export default NextArrow;
