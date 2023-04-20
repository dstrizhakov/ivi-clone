import React, { FC, useState } from 'react';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { FSMProps } from '@/components/Modals/FullScreenModal/FullScreenModal.prop';
import styles from './RatingModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';

const RatingModal: FC<FSMProps> = ({ isOpen, closeModal }) => {
  const [active, setActive] = useState();
  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const close = () => {
    closeModal();
    setActive(undefined);
  };
  const rate = (r) => {
    setActive(() => r);
  };
  const send = () => {
    //mock
    console.log('sent');
    closeModal();
    setActive(undefined);
  };
  return (
    <FullScreenModal isOpen={isOpen} closeModal={close}>
      <div className={styles.body}>
        <Htag tag={'h2'}>Ваша оценка</Htag>
        <P>Оценки улучшают рекомендации</P>
        <div className={styles.picker}>
          {rates.map((r) => (
            <Button
              key={r}
              appearance={'transparent'}
              onClick={() => rate(r)}
              className={r === active && styles.active}
            >
              {r}
            </Button>
          ))}
        </div>
        <div className={styles.helper}>
          <div>
            <P>очень плохо</P>
          </div>
          <div>
            <P>отлично</P>
          </div>
        </div>
        <Button appearance={'red'} disabled={!active} onClick={() => send()}>
          Оценить
        </Button>
      </div>
    </FullScreenModal>
  );
};

export default RatingModal;
