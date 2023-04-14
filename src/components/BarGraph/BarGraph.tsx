import React, { FC } from 'react';
import { BarGraphProps } from '@/components/BarGraph/BarGraph.props';
import styles from './BarGraph.module.scss';
const BarGraph: FC<BarGraphProps> = ({ width, baseWidth }) => {
  return (
    <div style={{ width: baseWidth }}>
      <div className={styles.bar}>
        <div className={styles.barValue} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default BarGraph;
