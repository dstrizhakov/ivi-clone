import React from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';

const mock = [
  { id: 1, name: 'Артхаус' },
  { id: 2, name: 'Артхаус' },
  { id: 3, name: 'Артхаус' },
  { id: 4, name: 'Артхаус' },
  { id: 5, name: 'Артхаус' },
];

const Dropdown = ({ state }) => {
  return (
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
              {mock.map((i) => (
                <li key={i.id}>
                  <label>
                    <input type="checkbox" value={i.name} />
                    <div className={styles.input_text}>{i.name}</div>
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
  );
};

export default Dropdown;
