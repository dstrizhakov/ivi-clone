import React, { FC, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';

const Plank: FC = ({ plank, plankID, chosen, setChosen, arr }) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>();
  const disabled = plank.id == 2 && !chosen?.category?.categoryID;
  const handler = () => {
    !dropDownOpen && setDropDownOpen(() => true);
  };
  return (
    <>
      <Dropdown
        state={dropDownOpen}
        chosen={chosen}
        setChosen={setChosen}
        arr={arr}
        plankID={plankID}
        close={() => setDropDownOpen(false)}
      />
      <button
        className={`${styles.plank} ${dropDownOpen && styles.active}`}
        disabled={disabled}
        onClick={() => handler()}
      >
        <div className={styles.info}>
          <div className={styles.title}>{plank.title}</div>
          {!disabled && chosen && (
            <div className={styles.chosen}>
              {chosen
                .find((item) => item.plankID === plank.id)
                ?.category.map((item, index) => (
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
    </>
  );
};

export default Plank;
