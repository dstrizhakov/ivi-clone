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

const SortDropdown = () => {
  const [sortDrop, setSortDrop] = useState(false);
  const { t } = useTranslation();
  const ref = useRef(null);
  useOutsideClick(() => setSortDrop(() => false), ref);

  const sorts = [
    { id: 1, title: t('sections.by-amount') },
    { id: 2, title: t('sections.by-name-asc') },
    { id: 3, title: t('sections.by-name-desc') },
    { id: 4, title: t('sections.by-date') },
    { id: 5, title: t('sections.by-rating-asc') },
    { id: 6, title: t('sections.by-rating-desc') },
    { id: 0, title: t('sections.by-default') },
  ];
  const [current, setCurrent] = useState(sorts.find((item) => item.id == 0).id);

  const handler = (i) => {
    if (current === i.id) {
      setCurrent(() => 0);
    } else {
      setCurrent(() => i.id);
    }
  };

  return (
    <div className={styles.drop} ref={ref}>
      <Button appearance={'transparent'} onClick={() => setSortDrop(!sortDrop)}>
        <div className={styles.filters__icon}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          {sorts[current].title}
          {!sortDrop ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={`${styles.drop_container} ${sortDrop ? styles.opened : ''}`}>
        <div className={styles.dropdown__title}>{t('buttons.sort')}</div>
        {sorts.map((i) => (
          <button
            className={`${styles.dropdown__item} ${i.id == current ? styles.active : ''}`}
            key={i.id}
            onClick={() => handler(i)}
          >
            <div className={i.id == current ? styles.stripe : ''} />
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
