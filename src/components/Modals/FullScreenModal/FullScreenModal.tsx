import React, { FC } from 'react';
import styles from './FullScreenModal.module.scss';
import { FSMProps } from '@/components/Modals/FullScreenModal/FullScreenModal.prop';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { usePreventScroll } from '@/hooks/usePreventScroll';

const FullScreenModal: FC<FSMProps> = ({ isOpen, closeModal, children }) => {
  useEscapeKey(closeModal);
  usePreventScroll(isOpen);
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
