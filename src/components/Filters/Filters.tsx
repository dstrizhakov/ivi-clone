import React, { useState } from 'react';
import styles from './Filters.module.scss';
import Plank from '@/components/Filters/Plank/Plank';
import Sausage from '@/components/Filters/Sausage/Sausage';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';

const Filters = () => {
  const [active, setActive] = useState(true); //mock
  const sausages = [
    { id: 1, title: 'Бесплатные' },
    { id: 2, title: 'По подписке' },
    { id: 3, title: 'На языке оригинала' },
    { id: 4, title: 'С субтитрами' },
    { id: 5, title: 'Объёмный звук' },
  ];
  const planks = [
    { id: 1, title: 'Жанры' },
    { id: 2, title: 'Поджанры' },
    { id: 3, title: 'Страны' },
    { id: 4, title: 'Годы' },
    { id: 5, title: 'Рейтинг иви' },
  ];
  return (
    <div className={styles.filters}>
      <div className={styles.plank_list}>
        {planks.map((i) => (
          <div className={styles.plank_item} key={'p' + i.id}>
            <Plank plank={i} />
          </div>
        ))}
      </div>
      <div className={styles.sausage_list}>
        {sausages.map((i) => (
          <div className={styles.sausage} key={'s' + i.id}>
            <Sausage sausage={i} />
          </div>
        ))}
      </div>
      <Button
        appearance={'transparent'}
        className={`${styles.reset} ${active && styles.active}`}
        onClick={() => setActive((a) => !a)}
      >
        <div>
          <RxCross2 size={'20px'} />
        </div>
        <div>Сбросить фильтры</div>
      </Button>
    </div>
  );
};

export default Filters;
