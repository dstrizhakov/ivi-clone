import React from 'react';

import styles from './Card.module.scss';

const CardLoader = () => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.imageSection} loader`} />
      <div className={`${styles.textSection} loader`} />
    </div>
  );
};

export default CardLoader;
