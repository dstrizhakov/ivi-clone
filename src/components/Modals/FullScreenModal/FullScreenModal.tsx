import React, { FC } from 'react';
import styles from './FullScreenModal.module.scss';
import { FSMProps } from '@/components/Modals/FullScreenModal/FullScreenModal.prop';
import { useEscapeKey } from '@/hooks/useEscapeKey';

const FullScreenModal: FC<FSMProps> = ({ isOpen, closeModal, children }) => {
  useEscapeKey(closeModal);
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <span
            className={styles.cross}
            onClick={() => closeModal()}
            title="Нажмите, чтобы закрыть форму"
          />
          {children}
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
