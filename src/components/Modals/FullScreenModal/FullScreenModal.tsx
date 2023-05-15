import React, { FC } from 'react';
import styles from './FullScreenModal.module.scss';
import { FSMProps } from '@/components/Modals/FullScreenModal/FullScreenModal.prop';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useTranslation } from 'react-i18next';

const FullScreenModal: FC<FSMProps> = ({ isOpen, closeModal, children }) => {
  useEscapeKey(closeModal);
  const { t } = useTranslation();
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <span
            className={styles.cross}
            onClick={() => closeModal()}
            title={t('buttons.close-form') || 'Нажмите, чтобы закрыть форму'}
          />
          {children}
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
