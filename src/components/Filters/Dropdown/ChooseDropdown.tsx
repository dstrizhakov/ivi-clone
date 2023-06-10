import React, { FC } from 'react';
import styles from './Dropdown.module.scss';
import { BsCheckLg } from 'react-icons/bs';
import { categories } from '@/mock/filters';
import Dropdown from '@/components/Filters/Dropdown/Dropdown';

interface iChooseDropdown {
  state: boolean;
  plank: unknown[];
  chosen: unknown[];
  change: unknown;
}

const ChooseDropdown: FC<iChooseDropdown> = ({ state, plank, chosen, change }): JSX.Element => {
  return (
    <Dropdown state={state}>
      <div className={`${styles.dropdown} ${styles.choose}`}>
        <div className={styles.list_container}>
          <ul>
            {categories
              .find((item) => item.plankID == plank?.id)
              ?.category.map((i) => (
                <li
                  key={i.id}
                  className={
                    chosen
                      ?.find((item) => item.plankID === plank?.id)
                      ?.category.find((item) => item.id == i.id)
                      ? styles.checked
                      : ''
                  }
                >
                  <label>
                    <input type="checkbox" value={i.title} onChange={() => change(i)} />
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
    </Dropdown>
  );
};

export default ChooseDropdown;
