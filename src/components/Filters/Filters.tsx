import React, { useEffect, useState } from 'react';
import styles from './Filters.module.scss';
import Plank from '@/components/Filters/Plank/Plank';
import Sausage from '@/components/Filters/Sausage/Sausage';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';
const Filters = () => {
  const [active, setActive] = useState(false);
  const [chosenPlanks, setChosenPlanks] = useState([
    { id: 1, title: 'Комедия' },
    { id: 2, title: 'Артхаус' },
    { id: 3, title: 'Приключения' },
  ]);
  const [sausages, setSausages] = useState([
    { id: 1, title: 'Бесплатные', checked: false },
    { id: 2, title: 'По подписке', checked: false },
    { id: 3, title: 'На языке оригинала', checked: false },
    { id: 4, title: 'С субтитрами', checked: false },
    { id: 5, title: 'Объёмный звук', checked: false },
  ]);
  const planks = [
    { id: 1, title: 'Жанры' },
    { id: 2, title: 'Поджанры' },
    { id: 3, title: 'Страны' },
    { id: 4, title: 'Годы' },
    { id: 5, title: 'Рейтинг иви' },
  ];
  useEffect(() => {
    const check = chosenPlanks.length > 0 || sausages.find((i) => i.checked)?.checked || false;
    setActive(() => check);
  }, [chosenPlanks, sausages]);
  const reset = () => {
    setChosenPlanks(() => []);
    sausages.map((i) => (i.checked = false));
    setActive(() => false);
  };
  return (
    <div className={styles.filters}>
      <div className={styles.plank_list}>
        {planks.map((i) => (
          <div className={styles.plank_item} key={'p' + i.id}>
            <Plank plank={i} chosen={chosenPlanks} />
          </div>
        ))}
      </div>
      <div className={styles.sausage_list}>
        {sausages.map((i) => (
          <div className={styles.sausage} key={'s' + i.id}>
            <Sausage sausage={i} s={sausages} set={setSausages} />
          </div>
        ))}
      </div>
      <Button
        appearance={'transparent'}
        className={styles.reset}
        onClick={() => reset()}
        disabled={!active}
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
