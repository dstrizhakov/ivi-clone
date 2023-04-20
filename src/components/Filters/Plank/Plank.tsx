import React, { FC, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown } from 'react-icons/bs';
import { movieCategories } from '@/mock/movieCategories';

const Plank: FC = ({ plank }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropdowns = movieCategories.genres;
  return (
    <>
      <button
        className={`${styles.plank} ${dropDownOpen && styles.active}`}
        disabled={dropdowns.length <= 0}
        onClick={() => setDropDownOpen((dd) => !dd)}
      >
        <div className={styles.title}>{plank.title}</div>

        <div className={styles.icon}>
          <BsChevronCompactDown />
        </div>
      </button>
    </>
  );
};

export default Plank;
