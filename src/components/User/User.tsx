import React, { FC } from 'react';
import styles from './User.module.scss';
import { BiUser } from 'react-icons/bi';

const User: FC = () => {
  return (
    <div className={styles.user}>
      <BiUser className={styles.user__button} />
      <div className={styles.user__body}>
        <span className={styles.user__border}></span>
        <div className={styles.user__content}>
          <p>USER ACTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default User;
