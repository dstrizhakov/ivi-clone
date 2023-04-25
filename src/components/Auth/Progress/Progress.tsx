import React, { FC } from 'react';
import styles from './Progress.module.scss';
import { ProgressProps } from './Progress.props';

const Progress: FC<ProgressProps> = ({ progress }): JSX.Element => {
  return (
    <div className={styles.progress}>
      <div className={styles.progress__line} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Progress;
