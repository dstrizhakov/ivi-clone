import React, { useRef, useState } from 'react';
import styles from './SortDropdown.module.scss';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSort,
} from 'react-icons/md';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const sorts = [
  { id: 1, title: 'По количеству оценок' },
  { id: 2, title: 'По дате выхода' },
  { id: 3, title: 'По рейтингу' },
  { id: 4, title: 'По алфавиту' },
  { id: 0, title: 'По умолчанию' },
];

const SortDropdown = () => {
  const [sortDrop, setSortDrop] = useState(false);
  const [current, setCurrent] = useState(sorts.find((item) => item.id == 0));
  const { t } = useTranslation();
  const ref = useRef(null);
  useOutsideClick(() => setSortDrop(() => false), ref);

  const handler = (i) => {
    if (current == i) {
      setCurrent(sorts.find((item) => item.id == 0));
    } else {
      setCurrent(() => i);
    }
  };

  return (
    <div className={styles.drop} ref={ref}>
      <Button appearance={'transparent'} onClick={() => setSortDrop(!sortDrop)}>
        <div className={styles.filters__icon}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          {current.title}
          {!sortDrop ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={`${styles.drop_container} ${sortDrop ? styles.opened : ''}`}>
        <div className={styles.dropdown__title}>{t('buttons.sort')}</div>
        {sorts.map((i) => (
          <button
            className={`${styles.dropdown__item} ${i.id == current.id ? styles.active : ''}`}
            key={i.id}
            onClick={() => handler(i)}
          >
            <div className={i.id == current.id ? styles.stripe : ''} />
            <div className={styles.dropdown__item__itemText} key={i.id}>
              {i.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
