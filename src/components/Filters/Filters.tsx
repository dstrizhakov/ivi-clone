import { FC, useEffect, useState } from 'react';
import styles from './Filters.module.scss';
import Plank, { Planks } from '@/components/Filters/Plank/Plank';
import { Button } from '@/components/Button/Button';
import { RxCross2 } from 'react-icons/rx';
import { planks } from '@/mock/filters';
import { useTranslation } from 'react-i18next';
import InputRange from '@/components/Filters/Plank/InputRange';
import { GoSettings } from 'react-icons/go';
import SortDropdown from '@/components/Filters/SortDropdown/SortDropdown';
import { BtnA } from '@/components/Button/Button.props';

//todo: add framer-motion filter animation

const Filters: FC = (): JSX.Element => {
  const [openedFilter, setOpenedFilter] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  const [chosen, setChosen] = useState([]);
  const [chosenSausages, setSausages] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const isAlreadyActive = chosen.find((i) => i.category.length)?.category?.length;
    setActive(() => isAlreadyActive || chosenSausages.find((item) => item.id));
  }, [chosen, chosenSausages]);
  const reset = () => {
    setChosen(() => []);
    setSausages(() => []);
    setActive(() => false);
  };
  return (
    <>
      <div className={styles.openers}>
        <Button appearance={BtnA.transparent} onClick={() => setOpenedFilter(!openedFilter)}>
          <div className={styles.filters__icon}>
            <GoSettings />
            <div className={styles.open_filter}>
              {openedFilter ? t('buttons.collapse') : t('buttons.filters')}
            </div>
          </div>
        </Button>
        <SortDropdown />
      </div>

      {openedFilter && (
        <div className={styles.filters}>
          <div className={styles.plank_list}>
            <div className={styles.plank_item}>
              <Plank plank={planks[0]} chosen={chosen} setChosen={setChosen} type={Planks.choose} />
            </div>
            <div className={styles.plank_item}>
              <Plank plank={planks[1]} chosen={chosen} setChosen={setChosen} type={Planks.find} />
            </div>
            <div className={styles.plank_item}>
              <Plank plank={planks[2]} chosen={chosen} setChosen={setChosen} type={Planks.find} />
            </div>
            <div className={styles.plank_item}>
              <Plank plank={planks[3]} chosen={chosen} setChosen={setChosen} type={Planks.choose} />
            </div>
            <div className={styles.plank_item}>
              <InputRange minLimit={6.7} maxLimit={10} range={0.1}>
                {t('sections.rating')}
              </InputRange>
            </div>
            <div className={styles.plank_item}>
              <InputRange minLimit={0} maxLimit={1_000_000} range={993}>
                {t('sections.rates-amount')}
              </InputRange>
            </div>
          </div>
          <Button
            appearance={BtnA.transparent}
            className={styles.reset}
            onClick={reset}
            disabled={!active}
          >
            <div>
              <RxCross2 size={'20px'} />
            </div>
            <div>{t('buttons.reset-filters')}</div>
          </Button>
        </div>
      )}
    </>
  );
};

export default Filters;
