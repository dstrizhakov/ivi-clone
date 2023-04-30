import React, { FC, useState } from 'react';
import styles from './AuthModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { AuthModalProps } from './AuthModal.props';
import { P } from '../P/P';
import BarGraph from '@/components/BarGraph/BarGraph';

const AuthModal: FC<AuthModalProps> = ({ isOpen, close }): JSX.Element => {
  const [progress, setProgress] = useState<number>(5);
  const [step, setStep] = useState<number>(1);
  const [login, setLogin] = useState<string>('');

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
    <>
      <FullScreenModal isOpen={isOpen} closeModal={close}>
        <div className={styles.chat}>
          <div className={styles.chat__header}>
            <h5 className={styles.chat__title}>Вход или регистрация</h5>
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
                <h5>Войдите или зарегистрируйтесь</h5>
                <P>чтобы пользоваться сервисом на любом устройстве</P>
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
              <label>Через email или телефон</label>
            </div>
            <button disabled={!login} className={styles.button} onClick={nextStep}>
              Продолжить
            </button>
            <div className={styles.chat__confidential}>
              <p>Нажимая «Продолжить», я соглашаюсь</p>
              <p>
                c{' '}
                <a href="https://www.ivi.tv/info/confidential" target="_blank" rel="noreferrer">
                  Политикой конфиденциальности
                </a>
              </p>
              <p>
                и{' '}
                <a href="https://www.ivi.tv/info/agreement" target="_blank" rel="noreferrer">
                  Пользовательским соглашением
                </a>
              </p>
            </div>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export default AuthModal;
