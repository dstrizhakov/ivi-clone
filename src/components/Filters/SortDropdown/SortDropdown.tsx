import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './SortDropdown.module.scss';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSort,
} from 'react-icons/md';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { BtnA } from '@/components/Button/Button.props';

const SortDropdown: FC = (): JSX.Element => {
  const [sortDrop, setSortDrop] = useState(false);
  const { t } = useTranslation();
  const ref = useRef(null);
  const closeState = () => {
    setSortDrop(() => false);
  };
  const changeState = () => {
    setSortDrop((d) => !d);
  };
  useOutsideClick(closeState, ref);

  const sorts = [
    { id: 1, title: t('sections.by-amount') },
    { id: 2, title: t('sections.by-name-asc') },
    { id: 3, title: t('sections.by-name-desc') },
    { id: 4, title: t('sections.by-date') },
    { id: 5, title: t('sections.by-rating-asc') },
    { id: 6, title: t('sections.by-rating-desc') },
    { id: 0, title: t('sections.by-default') },
  ];
  const [current, setCurrent] = useState(0);

  const handler = useCallback(
    (i) => {
      if (current === i.id) {
        setCurrent(() => 0);
      } else {
        setCurrent(() => i.id);
      }
      if (current === 0) {
        setTimeout(() => {
          closeState();
        }, 150);
      }
    },
    [current]
  );

  useEffect(() => {
    setTimeout(() => {
      closeState();
    }, 150);
  }, [current]);

  return (
    <div className={styles.drop} ref={ref}>
      <Button appearance={BtnA.transparent} onClick={changeState}>
        <div className={styles.filters__icon}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          <div className={styles.head_title}>{sorts.find((sort) => sort.id === current).title}</div>
          {!sortDrop ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={`${styles.drop_container} ${sortDrop ? styles.opened : ''}`}>
        <div className={styles.dropdown__title}>{t('buttons.sort')}</div>
        {sorts.map((sort) => (
          <button
            className={`${styles.dropdown__item} ${sort.id == current ? styles.active : ''}`}
            key={sort.id}
            onClick={() => handler(sort)}
          >
            <div className={sort.id == current ? styles.stripe : ''} />
            <div className={styles.dropdown__item__itemText} key={sort.id}>
              {sort.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
