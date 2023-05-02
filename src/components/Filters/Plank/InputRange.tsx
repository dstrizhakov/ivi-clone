import React, { ChangeEvent, FC, ReactNode, useState } from 'react';
import { P } from '@/components/P/P';
import styles from './Plank.module.scss';

interface iRange {
  onChange?: () => void;
  minLimit: number;
  maxLimit: number;
  range: number;
  children: ReactNode;
}

const InputRange: FC<iRange> = ({ onChange, minLimit, maxLimit, range, children }) => {
  const [inputValue, setInputValue] = useState<number>(minLimit);
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber < minLimit) {
      setInputValue(minLimit);
    } else if (e.target.valueAsNumber + range > maxLimit) {
      setInputValue(maxLimit);
    } else {
      setInputValue(e.target.valueAsNumber);
    }
    if (onChange) onChange();
  };
  return (
    <div className={styles.plank}>
      <div className={styles.input_range}>
        <div className={styles.output}>
          <P color={'white'}>{children}</P>
          <P color={'white'}>{inputValue}</P>
        </div>
        <input
          className={styles.input}
          onChange={(e) => handler(e)}
          type="range"
          min={minLimit}
          max={maxLimit}
          step={range}
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default InputRange;