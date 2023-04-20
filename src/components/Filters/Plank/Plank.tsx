import React, { FC, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';

const Plank: FC = ({ plank, chosen }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handler = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    setDropDownOpen((dd) => !dd);
  };
  const disabled = plank.id == 3;
  return (
    <>
      <Dropdown state={dropDownOpen} />
      <span onClick={() => setDropDownOpen(false)}>
        <button
          className={`${styles.plank} ${dropDownOpen && styles.active}`}
          disabled={disabled} //mock
          onClickCapture={handler}
        >
          <div className={styles.info}>
            <div className={styles.title}>{plank.title}</div>
            {!disabled && chosen && (
              <div className={styles.chosen}>
                {chosen.map((item, index) => (
                  <span key={item.id}>
                    {chosen.length > index + 1 ? `${item.title}, ` : item.title}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className={styles.icon}>
            {dropDownOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
          </div>
        </button>
      </span>
    </>
  );
};

export default Plank;
