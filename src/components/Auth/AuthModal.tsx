import React, { FC, useState } from 'react';
import styles from './AuthModal.module.scss';
import { CgClose } from 'react-icons/cg';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { AuthModalProps } from './AuthModal.props';
import Progress from './Progress/Progress';
import { P } from '../P/P';

const AuthModal: FC<AuthModalProps> = ({ isOpen, close }): JSX.Element => {
  const [login, setLogin] = useState<string>('');

  return (
    <>
      <FullScreenModal isOpen={isOpen} closeModal={close}>
        <div className={styles.chat}>
          <div className={styles.chat__header}>
            <h5 className={styles.chat__title}>Вход или регистрация</h5>
            <div className={styles.chat__close}>
              <CgClose className={styles.close__icon} onClick={close} />
            </div>
            <Progress progress={5} />
          </div>
          <div className={styles.chat__body}>
            <div className={styles.chat__message}>
              <h5>Войдите или зарегистрируйтесь</h5>
              <P>чтобы пользоваться сервисом на любом устройстве</P>
            </div>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export default AuthModal;
