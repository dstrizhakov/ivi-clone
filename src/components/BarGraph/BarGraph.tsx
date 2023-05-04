import React, { FC } from 'react';
import { BarGraphProps } from '@/components/BarGraph/BarGraph.props';
import styles from './BarGraph.module.scss';
const BarGraph: FC<BarGraphProps> = ({ width }) => {
  return (
    <div className={styles.bar}>
      <div className={styles.barValue} style={{ width: `${width}%` }} data-testid={'bar'}></div>
    </div>
  );
};

export default BarGraph;
