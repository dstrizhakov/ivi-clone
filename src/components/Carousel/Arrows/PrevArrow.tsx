import styles from './Arrows.module.scss';
import { Button } from '@/components/Button/Button';
import { MdArrowBackIosNew } from 'react-icons/md';
import React, { FC } from 'react';
import { BtnA, BtnS } from '@/components/Button/Button.props';

export type PrevArrowProps = {
  variant?: 'promo';
};

const PrevArrow: FC<PrevArrowProps> = ({ variant, ...props }): JSX.Element => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={`${styles.arrow} ${variant === 'promo' ? styles.prevPromo : styles.prev}`}>
        <Button
          size={BtnS.L}
          appearance={BtnA.transparent}
          disabled={className.split(' ')[2] === 'slick-disabled'}
        >
          <MdArrowBackIosNew size={30} />
        </Button>
      </div>
      {variant == 'promo' && <div className={styles.prev_banner} />}
    </div>
  );
};

export default PrevArrow;
