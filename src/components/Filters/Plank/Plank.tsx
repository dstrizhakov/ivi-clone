import React, { FC, useRef, useState } from 'react';
import styles from './Plank.module.scss';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import ChooseDropdown from '@/components/Filters/Dropdown/ChooseDropdown';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import SearchDropdown from '@/components/Filters/Dropdown/SearchDropdown';
import { persons } from "@/mock/persons";
export enum Planks {
  choose = 'choose',
  find = 'find',
}
interface iPlank {
  plank: any;
  chosen: any;
  setChosen: (p: (ch) => any[]) => void;
  type: Planks;
}

const Plank: FC<iPlank> = ({ plank, chosen, setChosen, type }) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>();
  const ref = useRef(null);
  useOutsideClick(() => setDropDownOpen(() => false), ref);
  const changePressed = (i) => {
    setChosen((ch) =>
      [
        ...ch.filter((item) => item.plankID !== plank.id),
        {
          plankID: plank.id,
          category: ch
            .find((item) => item.plankID === plank.id)
            ?.category.find((item) => item.id == i.id)
            ? [
                ...ch
                  ?.find((item) => item.plankID === plank.id)
                  ?.category.filter((item) => item.id !== i.id),
              ].sort((a, b) => a.id - b.id)
            : [
                ...(ch?.find((item) => item.plankID == plank.id)?.category || []),
                {
                  id: i.id,
                  title: i.title,
                },
              ].sort((a, b) => a.id - b.id),
        },
      ].sort((a, b) => a.plankID - b.plankID)
    );
  };
  return (
    <span ref={ref}>
      {type == Planks.choose ? (
        <ChooseDropdown state={dropDownOpen} chosen={chosen} plank={plank} change={changePressed} />
      ) : (
        <SearchDropdown state={dropDownOpen} chosen={chosen} plank={plank} change={changePressed} />
      )}
      <button
        className={`${styles.plank} ${dropDownOpen && styles.active}`}
        onClick={() => setDropDownOpen((d) => !d)}
      >
        <div className={styles.info}>
          <div className={styles.title}>{plank.title}</div>
          {chosen && (
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
