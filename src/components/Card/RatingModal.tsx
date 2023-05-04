import React, { FC, useState } from 'react';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import styles from './RatingModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { selectModal, setShowRating } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { BtnA } from '@/components/Button/Button.props';

const RatingModal: FC = () => {
  const [active, setActive] = useState();
  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { t } = useTranslation();
  const { showRating } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowRating(false));
    setActive(null);
  };
  const rate = (r) => {
    setActive(() => r);
  };
  const send = () => {
    dispatch(setShowRating(false));
    setActive(null);
  };
  usePreventScroll(showRating);
  return (
    <FullScreenModal isOpen={showRating} closeModal={() => close()}>
      <div className={styles.body}>
        <Htag tag={'h2'}>{t('descriptions.your-rate')}</Htag>
        <P>{t('descriptions.rates-improvements')}</P>
        <div className={styles.picker}>
          {rates.map((r) => (
            <Button
              key={r}
              appearance={BtnA.transparent}
              onClick={() => rate(r)}
              className={r === active && styles.active}
            >
              {r}
            </Button>
          ))}
        </div>
        <div className={styles.helper}>
          <div>
            <P>{t('buttons.very-bad')}</P>
          </div>
          <div>
            <P>{t('buttons.great')}</P>
          </div>
        </div>
        <Button appearance={BtnA.red} disabled={!active} onClick={() => send()}>
          {t('buttons.rate')}
        </Button>
      </div>
    </FullScreenModal>
  );
};

export default RatingModal;
