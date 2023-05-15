import { FC, useState } from 'react';
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
const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RatingModal: FC = (): JSX.Element => {
  const [active, setActive] = useState<number | null>();
  const { t } = useTranslation();
  const { showRating } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowRating(false));
    setActive(null);
  };
  const rate = (rating: number) => {
    setActive(() => rating);
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
          {rates.map((rating) => (
            <Button
              key={rating}
              appearance={BtnA.transparent}
              onClick={() => rate(rating)}
              className={rating === active ? styles.active : ''}
            >
              {rating}
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
