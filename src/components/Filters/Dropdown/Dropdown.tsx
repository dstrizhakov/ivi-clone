import React, { useRef } from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const Dropdown = ({ state, chosen, setChosen, close, arr }) => {
  const changePressed = (i) => {
    const findChosen = chosen.find((item) => item.id == i.id);
    if (findChosen?.checked) {
      setChosen(() => [...chosen.filter((item) => item.id !== i.id)].sort((a, b) => a.id - b.id));
    } else {
      setChosen(() =>
        [
          ...chosen.filter((item) => item.id !== i.id),
          {
            id: i.id,
            title: i.title,
            checked: true,
          },
        ].sort((a, b) => a.id - b.id)
      );
    }
  };
  const ref = useRef(null);
  useOutsideClick(close, ref);
  return (
    <span ref={ref}>
      <div className={styles.dropdown_out}>
        {state && (
          <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
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
    </span>
  );
};

export default Dropdown;
