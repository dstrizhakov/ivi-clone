import React, { FC, useState } from 'react';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import styles from './RatingModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal, setShowRating } from '@/store/reducers/modals.slice';

const RatingModal: FC = () => {
  const [active, setActive] = useState();
  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { t, i18n } = useTranslation();
  const { showRating } = useSelector(selectModal);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(setShowRating(false));
    setActive(undefined);
  };
  const rate = (r) => {
    setActive(() => r);
  };
  const send = () => {
    dispatch(setShowRating(false));
    setActive(undefined);
  };
  return (
    <FullScreenModal isOpen={showRating} closeModal={() => close()}>
      <div className={styles.body}>
        <Htag tag={'h2'}>{t('descriptions.your-rate')}</Htag>
        <P>{t('descriptions.rates-improvements')}</P>
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
            <P>{i18n.language == 'en' ? 'very bad' : 'очень плохо'}</P>
          </div>
          <div>
            <P>{i18n.language == 'en' ? 'great' : 'отлично'}</P>
          </div>
        </div>
        <Button appearance={'red'} disabled={!active} onClick={() => send()}>
          {t('buttons.rate')}
        </Button>
      </div>
    </FullScreenModal>
  );
};

export default RatingModal;
