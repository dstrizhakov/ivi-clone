import React from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import { categories } from '@/mock/filters';

const Dropdown = ({ state, plankID, chosen, setChosen }) => {
  const changePressed = (i) => {
    //state.filters
    setChosen((ch) =>
      [
        ...ch.filter((item) => item.plankID !== plankID),
        {
          plankID: plankID,
          category: ch
            .find((item) => item.plankID === plankID)
            ?.category.find((item) => item.id == i.id)
            ? [
                ...ch
                  ?.find((item) => item.plankID === plankID)
                  ?.category.filter((item) => item.id !== i.id),
              ]
            : [
                ...(ch?.find((item) => item.plankID == plankID)?.category || []),
                {
                  id: i.id,
                  title: i.title,
                },
              ],
        },
      ].sort((a, b) => a.plankID - b.plankID)
    );
  };
  return (
    <>
      <div className={styles.dropdown_out}>
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
                {categories
                  .find((item) => item.plankID == plankID)
                  .category.map((i) => (
                    <li
                      key={i.id}
                      className={`${
                        chosen
                          ?.find((item) => item.plankID === plankID)
                          ?.category.find((item) => item.id == i.id) && styles.checked
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
