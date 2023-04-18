import React, { FC } from 'react';
import styles from './FullScreenModal.module.scss';
import { FSMProps } from '@/components/Modals/FullScreenModal/FullScreenModal.prop';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { usePreventScroll } from '@/hooks/usePreventScroll';

const FullScreenModal: FC<FSMProps> = ({ isOpen, closeSearch, children }) => {
  useEscapeKey(closeSearch);
  usePreventScroll(isOpen);
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <span className={styles.cross} onClick={() => closeSearch()}></span>
          {children}
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
