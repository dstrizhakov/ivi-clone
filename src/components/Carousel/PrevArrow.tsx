import styles from '@/components/Carousel/Carousel.module.scss';
import { Button } from '@/components/Button/Button';
import { MdArrowBackIosNew } from 'react-icons/md';
import { FC } from 'react';
import { BtnA, BtnS } from '@/components/Button/Button.props';

export type PrevArrowProps = {
  variant?: 'promo';
};

const PrevArrow: FC<PrevArrowProps> = ({ variant, ...props }): JSX.Element => {
  return (
    <div
      className={`${styles.arrow} ${variant === 'promo' ? styles.prevPromo : styles.prev}`}
      onClick={props.onClick}
    >
      <Button
        size={BtnS.L}
        appearance={BtnA.transparent}
        disabled={props.className.split(' ')[2] === 'slick-disabled'}
      >
        <MdArrowBackIosNew size={30} />
      </Button>
    </div>
  );
};

export default PrevArrow;
