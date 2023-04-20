import React, { useRef } from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const Dropdown = ({ state, chosen, setChosen, close, arr }) => {
  const changePressed = (i) => {
    setChosen(() =>
      [
        ...chosen.filter((a) => a.id !== i.id),
        {
          id: i.id,
          title: i.title,
          checked: !i.checked,
        },
      ].sort((a, b) => a.id - b.id)
    );
    i.checked = !i.checked;
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
                    className={`${chosen.find((item) => item.id == i.id) && styles.checked}`}
                    onClick={() => setChosen([...new Set([...chosen, i])])}
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
