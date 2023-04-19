import React, { FC, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const Plank: FC = ({ plank }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <>
      <button
        className={`${styles.plank} ${dropDownOpen && styles.active}`}
        disabled={plank.id == 3} //mock
        onClick={() => setDropDownOpen((dd) => !dd)}
      >
        <div className={styles.title}>{plank.title}</div>

        <div className={styles.icon}>
          {dropDownOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
        </div>
      </button>
    </>
  );
};

export default Plank;
