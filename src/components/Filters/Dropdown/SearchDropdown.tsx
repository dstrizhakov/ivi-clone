import React, { useState } from 'react';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import { categories } from '@/mock/filters';

const SearchDropdown = ({ state, chosen, plank }) => {
  const [val, setVal] = useState<string>('');
  const handler = (e) => {
    setVal(() => e.target.value);
  };
  const change = (i) => {
    console.log(i);
  };
  const dynamicSearch = () => {
    const array = categories.find((item) => item.plankID === plank.id)?.category;
    if (!val) return [...array].splice(0, 10);
    return array.filter((s) => {
      const regex = new RegExp(val + '[A-Za-z0-9]*', 'gi');
      return s.title.match(regex)?.splice(0, 10);
    });
  };
  return (
    <Dropdown state={state}>
      <div className={`${styles.dropdown} ${styles.find}`}>
        <input type={'text'} onChange={(e) => handler(e)} value={val} />
        <div className={styles.list_container}>
          <ul className={styles.one_lane}>
            {dynamicSearch().map((person) => (
              <li className={person.id == 1 ? styles.checked : ''} key={person.id}>
                <label>
                  <input type="checkbox" value={person.title} onChange={() => change(person)} />
                  <div className={styles.input_text}>{person.title}</div>
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
    </Dropdown>
  );
};

export default SearchDropdown;
