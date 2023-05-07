import styles from '@/components/Carousel/Carousel.module.scss';
import { Button } from '@/components/Button/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import React from 'react';
import { BtnA, BtnS } from '@/components/Button/Button.props';

const NextArrow = (props) => {
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={props.onClick}>
      <Button
        size={BtnS.L}
        appearance={BtnA.transparent}
        disabled={props.className.split(' ')[2] === 'slick-disabled'}
      >
        <MdArrowForwardIos size={30} />
      </Button>
    </div>
  );
};

export default NextArrow;
