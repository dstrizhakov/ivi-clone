import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const Dropdown = ({ state, plankID, chosen, setChosen, close, arr }) => {
  const [narr, setArr] = useState([]);
  const changePressed = (i) => {
    chosen.reduce((i, n) => i + n.category.length, 0) || setArr(() => []);
    let newChosen;
    const findChosen = chosen.find((item) => item.id == i.id);
    if (findChosen?.checked) {
      setArr(() => [...narr.filter((item) => item.id !== i.id)]);
    } else {
      newChosen = {
        id: i.id,
        title: i.title,
        checked: true,
      };
      setArr(() =>
        [...narr.filter((item) => item.id !== i.id), newChosen].sort((a, b) => a.id - b.id)
      );
    }
    setChosen(() =>
      [
        ...chosen.filter((item) => item.plankID !== plankID),
        { plankID: plankID, category: [...narr] },
      ].sort((a, b) => a.plankID - b.plankID)
    );
  };
  const ref = useRef(null);
  useOutsideClick(close, ref);
  return (
    <>
      <div className={styles.dropdown_out} ref={ref}>
        {state && (
          <div className={styles.dropdown}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>Card</div>
              <div>Card</div>
              <div>Card</div>
              <div>Card</div>
              <div>Card</div>
            </div>
            <div className={styles.list_container}>
              <ul>
                {arr.map((i) => (
                  <li
                    key={i.id}
                    className={`${
                      chosen.find((item) => item.id == i.id)?.checked && styles.checked
                    }`}
                  >
                    <label>
                      <input type="checkbox" value={i.title} onChange={() => changePressed(i)} />
                      <div className={styles.input_text}>{i.title}</div>
                      <div className={styles.checkbox}>
                        <div className={styles.checkbox_selected}>
                          <BsCheckLg />
                        </div>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
