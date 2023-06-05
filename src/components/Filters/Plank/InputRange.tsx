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

const InputRange: FC<iRange> = ({ onChange, minLimit, maxLimit, range, children }): JSX.Element => {
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
          <P color={'white'}>&gt; {inputValue}</P>
        </div>
        <input
          className={styles.input}
          onChange={(e) => handler(e)}
          type="range"
          min={minLimit}
          max={maxLimit}
          step={range}
          value={inputValue}
          style={{
            background: `linear-gradient(90deg, #A2002DFF ${
              ((inputValue - minLimit) * 100) / (maxLimit - minLimit)
            }%, #1f1b2d 0%)`,
            zIndex: 100,
          }}
        />
      </div>
    </div>
  );
};

export default InputRange;
