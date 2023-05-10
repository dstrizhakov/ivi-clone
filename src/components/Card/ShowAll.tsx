import React, { FC } from 'react';
import styles from '@/components/Card/Card.module.scss';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';

const ShowAll: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={`${styles.imageSection} ${styles.show}`}>
        <P>{t('buttons.show-all')}</P>
      </div>
    </div>
  );
};

export default ShowAll;
