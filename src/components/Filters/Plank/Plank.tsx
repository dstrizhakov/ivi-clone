import React, { FC, useRef, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const Plank: FC = ({ plank, plankID, chosen, setChosen }) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>();
  const disabled = plank.id == 2; //&& !chosen.find((i) => i.plankID == 1)?.category?.length;
  const ref = useRef(null);
  useOutsideClick(() => setDropDownOpen(() => false), ref);
  return (
    <span ref={ref}>
      <Dropdown state={dropDownOpen} chosen={chosen} setChosen={setChosen} plankID={plankID} />
      <button
        className={`${styles.plank} ${dropDownOpen && styles.active}`}
        disabled={disabled}
        onClick={() => setDropDownOpen((d) => !d)}
      >
        <div className={styles.info}>
          <div className={styles.title}>{plank.title}</div>
          {!disabled && chosen && (
            <div className={styles.chosen}>
              {chosen
                .find((item) => item.plankID === plank.id)
                ?.category.map((item, index) => (
                  <span key={item.id}>
                    {chosen.find((item) => item.plankID == plank.id).category.length > index + 1
                      ? `${item.title}, `
                      : item.title}
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
  );
};

export default Plank;
