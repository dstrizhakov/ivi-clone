import React, { useEffect, useState } from 'react';
import styles from './Filters.module.scss';
import Plank from '@/components/Filters/Plank/Plank';
import Sausage from '@/components/Filters/Sausage/Sausage';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';

const planks = [
  { id: 1, title: 'Жанры' },
  { id: 2, title: 'Поджанры' },
  { id: 3, title: 'Страны' },
  { id: 4, title: 'Годы' },
  { id: 5, title: 'Рейтинг иви' },
];

const genres = [
  { id: 1, title: 'Артхаус' },
  { id: 2, title: 'Вестерн' },
  { id: 3, title: 'Драмы' },
  { id: 4, title: 'Комедии' },
  { id: 5, title: 'Катастрофы' },
];

const subgenres = [
  { id: 1, title: 'Артхаус' },
  { id: 2, title: 'Артхаус' },
  { id: 3, title: 'Артхаус' },
  { id: 4, title: 'Артхаус' },
  { id: 5, title: 'Артхаус' },
];

const countries = [
  { id: 1, title: 'Австралия' },
  { id: 2, title: 'Беларусь' },
  { id: 3, title: 'Великобритания' },
  { id: 4, title: 'Гонконг' },
  { id: 5, title: 'Ирландия' },
];

const Filters = () => {
  const [active, setActive] = useState(false);
  const [chosenGenrePlanks, setChosenGenrePlanks] = useState([]);
  const [chosenSubGenrePlanks, setChosenSubGenrePlanks] = useState([]);
  const [chosenCountries, setChosenCountries] = useState([]);
  const [sausages, setSausages] = useState([
    { id: 1, title: 'Бесплатные', checked: false },
    { id: 2, title: 'По подписке', checked: false },
    { id: 3, title: 'На языке оригинала', checked: false },
    { id: 4, title: 'С субтитрами', checked: false },
    { id: 5, title: 'Объёмный звук', checked: false },
  ]);
  useEffect(() => {
    const check =
      chosenGenrePlanks.length > 0 ||
      chosenSubGenrePlanks.length > 0 ||
      chosenCountries.length > 0 ||
      sausages.find((i) => i.checked)?.checked ||
      false;
    setActive(() => check);
  }, [chosenCountries.length, chosenGenrePlanks.length, chosenSubGenrePlanks.length, sausages]);
  const reset = () => {
    setChosenGenrePlanks(() => []);
    setChosenSubGenrePlanks(() => []);
    setChosenCountries(() => []);
    sausages.map((i) => (i.checked = false));
    setActive(() => false);
  };
  return (
    <div className={styles.filters}>
      <div className={styles.plank_list}>
        <div className={styles.plank_item}>
          <Plank
            plank={planks[0]}
            chosen={chosenGenrePlanks}
            setChosen={setChosenGenrePlanks}
            arr={genres}
          />
        </div>
        <div className={styles.plank_item}>
          <Plank
            plank={planks[1]}
            chosen={chosenSubGenrePlanks}
            setChosen={setChosenSubGenrePlanks}
            arr={subgenres}
          />
        </div>
        <div className={styles.plank_item}>
          <Plank
            plank={planks[2]}
            chosen={chosenCountries}
            setChosen={setChosenCountries}
            arr={countries}
          />
        </div>
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
