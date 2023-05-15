import React, { FC } from 'react';
import styles from './Alerts.module.scss';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';

const Alerts: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles.alerts__content}>
      <HiOutlineBellAlert className={styles.alerts__icon} />
      <p>{t('categories.notifications-text')}</p>
    </div>
  );
};

export default Alerts;
