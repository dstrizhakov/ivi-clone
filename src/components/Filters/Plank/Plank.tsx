import React, { FC, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';

const Plank: FC = ({ plank, chosen, setChosen, arr }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const disabled = plank.id == 2;
  return (
    <>
      <Dropdown
        state={dropDownOpen}
        chosen={chosen}
        setChosen={setChosen}
        arr={arr}
        close={() => setDropDownOpen(false)}
      />
      <span>
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
