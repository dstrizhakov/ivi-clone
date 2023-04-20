import React, { FC, useRef, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const Plank: FC = ({ plank, chosen }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const disabled = plank.id == 3;
  const ref = useRef(null);
  useOutsideClick(() => setDropDownOpen(false), ref);
  return (
    <>
      <Dropdown state={dropDownOpen} />
      <span ref={ref}>
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
