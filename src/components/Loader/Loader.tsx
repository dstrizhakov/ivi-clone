import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.circle_loader} />
    </div>
  );
};

export default Loader;
