import React, { FC } from 'react';
import styles from './Alerts.module.scss';
import { HiOutlineBellAlert } from 'react-icons/hi2';

const Alerts: FC = () => {
  return (
    <div className={styles.alerts}>
      <HiOutlineBellAlert className={styles.alerts__button} />
      <div className={styles.alerts__body}>
        <span className={styles.alerts__border}></span>
        <div className={styles.alerts__content}>
          <HiOutlineBellAlert className={styles.alerts__icon} />
          <p>Здесь появляются только важные сообщения</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;