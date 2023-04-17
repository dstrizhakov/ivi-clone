import React from 'react';
import styles from '@/components/Card/Card.module.scss';
import { P } from '@/components/P/P';

const ShowAll = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageSection} ${styles.show}`}>
        <P>Посмотреть все</P>
      </div>
    </div>
  );
};

export default ShowAll;
