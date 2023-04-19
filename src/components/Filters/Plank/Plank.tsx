import React, { FC, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const Plank: FC = ({ plank, chosen }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const disabled = plank.id == 3;
  return (
    <>
      <button
        className={`${styles.plank} ${dropDownOpen && styles.active}`}
        disabled={disabled} //mock
        onClick={() => setDropDownOpen((dd) => !dd)}
      >
        <div className={styles.info}>
          <div className={styles.title}>{plank.title}</div>
          {!disabled && chosen && (
            <div className={styles.chosen}>
              {chosen.map((item, index) => (
                <>{chosen.length > index + 1 ? `${item.title}, ` : item.title}</>
              ))}
            </div>
          )}
        </div>

        <div className={styles.icon}>
          {dropDownOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
        </div>
      </button>
    </>
  );
};

export default Plank;