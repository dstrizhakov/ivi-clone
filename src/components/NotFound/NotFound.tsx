import React from 'react';
import styles from './NotFound.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <div className={styles.content__row}>
        <Htag tag={'h2'}>{t('descriptions.error')}</Htag>
        <P>{t('descriptions.page-doesnt-exist')}</P>
      </div>
    </div>
  );
};

export default NotFound;
