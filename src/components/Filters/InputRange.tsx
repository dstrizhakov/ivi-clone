import React, { ChangeEvent, useState } from 'react';

const minValue = 6.7;

const InputRange = () => {
  const [inputValue, setInputValue] = useState<number>(minValue);
  const changer = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber < minValue) {
      setInputValue(minValue);
    } else {
      setInputValue(Math.round(e.target.valueAsNumber * 10) / 10);
    }
  };
  return (
    <>
      <input
        style={{ width: '100%' }}
        onChange={(e) => changer(e)}
        type="range"
        min={6.7}
        max={10}
        step={0.1}
        value={inputValue}
      />
      <div>{inputValue}</div>
    </>
  );
};

export default InputRange;
