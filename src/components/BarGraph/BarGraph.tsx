import React, { FC } from 'react';
import { BarGraphProps } from '@/components/BarGraph/BarGraph.props';
import styles from './BarGraph.module.scss';

const BarGraph: FC<BarGraphProps> = ({ width }): JSX.Element => {
  if (width > 100) {
    width = 100;
  } else if (width < 0) {
    width = 0;
  }
  return (
    <div className={styles.bar}>
      <div className={styles.barValue} style={{ width: `${width}%` }} data-testid={'bar'} />
    </div>
  );
};

export default BarGraph;
