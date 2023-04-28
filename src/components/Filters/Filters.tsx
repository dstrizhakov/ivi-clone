import React, { useEffect, useState } from 'react';
import styles from './Filters.module.scss';
import Plank from '@/components/Filters/Plank/Plank';
import Sausage from '@/components/Filters/Sausage/Sausage';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';
import { planks, sausages } from '@/mock/filters';
import { useTranslation } from 'react-i18next';
import InputRange from "@/components/Filters/InputRange";

const Filters = () => {
  const [active, setActive] = useState<boolean>(false);
  const [chosen, setChosen] = useState([]);
  const [chosenSausages, setSausages] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    setActive(
      () =>
        chosen.find((i) => i.category.length)?.category?.length ||
        chosenSausages.find((item) => item.id)
    );
  }, [chosen, chosenSausages]);
  const reset = () => {
    setChosen(() => []);
    setSausages(() => []);
    setActive(() => false);
  };
  return (
    <div className={styles.filters}>
      <div className={styles.plank_list}>
        {planks.map((plank) => (
          <div className={styles.plank_item} key={plank.id}>
            <Plank plank={plank} chosen={chosen} setChosen={setChosen} plankID={plank.id} />
          </div>
        ))}
        <div className={styles.plank_item}>
          <InputRange />
        </div>
      </div>
      <div className={styles.sausage_list}>
        {sausages.map((i) => (
          <div className={styles.sausage} key={'s' + i.id}>
            <Sausage sausage={i} set={setSausages} chosen={chosenSausages} />
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
        <div>{t('buttons.reset-filters')}</div>
      </Button>
    </div>
  );
};

export default Filters;
