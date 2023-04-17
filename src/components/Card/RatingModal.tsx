import React, { FC } from 'react';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { FSMProps } from '@/components/Modals/FullScreenModal/FullScreenModal.prop';
import styles from '@/components/Header/Search/SearchModal/SearchModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';

const RatingModal: FC<FSMProps> = ({ isOpen, closeModal }) => {
  return (
    <>
      <FullScreenModal isOpen={isOpen} closeModal={closeModal}>
        <div className={styles.body}>
          <Htag tag={'h3'}>Ваша оценка</Htag>
          <P>Оценки улучшают рекомендации</P>
          <div>фыв</div>
          <div style={{ display: 'flex', backgroundColor: '#1f1b2e' }}>
            <div
              style={{ backgroundColor: '#312b45', boxShadow: '0 4px 16px rgb(49 43 69 / 32%)' }}
            >
              <Button>1</Button>
            </div>
          </div>
          <div>
            <div>
              <P>очень плохо</P>
            </div>
            <div>
              <P>отлично</P>
            </div>
          </div>
          <Button appearance={'red'}>Оценить</Button>
        </div>
      </FullScreenModal>
    </>
  );
};

export default RatingModal;
