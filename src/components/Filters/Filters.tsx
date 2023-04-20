import React, { useEffect, useState } from 'react';
import styles from './Filters.module.scss';
import Plank from '@/components/Filters/Plank/Plank';
import Sausage from '@/components/Filters/Sausage/Sausage';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';
import { categories, planks } from '@/mock/filters';

const Filters = () => {
  const [active, setActive] = useState(false);
  const chose = planks.reduce((p, next) => {
    return [
      ...p,
      {
        plankID: next.id,
        category: [],
      },
    ];
  }, []);
  const [chosen, setChosen] = useState(chose);
  const [sausages, setSausages] = useState([
    { id: 1, title: 'Бесплатные', checked: false },
    { id: 2, title: 'По подписке', checked: false },
    { id: 3, title: 'На языке оригинала', checked: false },
    { id: 4, title: 'С субтитрами', checked: false },
    { id: 5, title: 'Объёмный звук', checked: false },
  ]);
  useEffect(() => {
    const check =
      chosen.map((i) => i.category.length) > 0 || sausages.find((i) => i.checked)?.checked || false;
    setActive(() => check);
    console.log(chosen);
  }, [chosen, sausages]);
  const reset = () => {
    console.log(chosen);
    setChosen(chose);
    sausages.map((i) => (i.checked = false));
    setActive(() => false);
  };
  return (
    <div className={styles.filters}>
      <div className={styles.plank_list}>
        {planks.map((plank) => (
          <div className={styles.plank_item} key={plank.id}>
            <Plank
              plank={plank}
              chosen={chosen}
              setChosen={setChosen}
              plankID={plank.id}
              arr={categories.find((item) => item.plankID == plank.id).category}
            />
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
