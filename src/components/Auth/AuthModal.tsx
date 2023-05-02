import React, { FC, useState } from 'react';
import styles from './AuthModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { P } from '../P/P';
import BarGraph from '@/components/BarGraph/BarGraph';
import { selectModal, setShowAuth } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';

const AuthModal: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState<number>(5);
  const [step, setStep] = useState<number>(1);
  const [login, setLogin] = useState<string>('');
  const { showAuth } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowAuth(false));
  };
  const nextStep = () => {
    setProgress(5);
    switch (step) {
      case 1:
        setStep((prev) => prev + 1);
        setProgress(40);
        break;
      case 2:
        setStep((prev) => prev + 1);
        setProgress(70);
        break;
      case 3:
        setStep((prev) => prev + 1);
        setProgress(100);
        break;
      case 4:
        setStep(1);
        setProgress(5);
        break;
    }
  };

  return (
    <FullScreenModal isOpen={showAuth} closeModal={close}>
      <div className={styles.chat}>
        <div className={styles.chat__header}>
          <h5 className={styles.chat__title}>{t('buttons.login-signup')}</h5>
          <div className={styles.chat__close}>
            <CgClose onClick={close} />
          </div>
          <div className={styles.chat__progress}>
            <BarGraph width={progress} />
          </div>
        </div>
        <div className={styles.chat__body}>
          {step >= 1 && (
            <div className={styles.chat__message}>
              <h5>{t('buttons.login-signup-person')}</h5>
              <P>{t('descriptions.any-device')}</P>
            </div>
          )}
          <div className={styles.input}>
            <BiUser className={styles.input__icon} />
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className={!!login ? styles.input__active : ''}
            />
            <label>{t('buttons.email-or-phone')}</label>
          </div>
          <button disabled={!login} className={styles.button} onClick={nextStep}>
            {t('buttons.continue')}
          </button>
          <div className={styles.chat__confidential}>
            <p>{t('descriptions.agree-on-click')}</p>
            <p>
              {t('descriptions.with')}{' '}
              <a href="https://www.ivi.tv/info/confidential" target="_blank" rel="noreferrer">
                {t('descriptions.privacy')}
              </a>
            </p>
            <p>
              {t('descriptions.and')}{' '}
              <a href="https://www.ivi.tv/info/agreement" target="_blank" rel="noreferrer">
                {t('descriptions.agreement')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </FullScreenModal>
  );
};

export default AuthModal;
