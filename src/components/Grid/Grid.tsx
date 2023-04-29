import React, { FC, useState } from 'react';
import styles from './Grid.module.scss';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { IMovie } from '@/types/types';
import Card from '@/components/Card/Card';

interface iGrid {
  array: IMovie[];
}

const Grid: FC<iGrid> = ({ array }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(10);
  const { t } = useTranslation();
  const showMore = () => {
    setLimit((l) => l * 2);
    setOpened(() => true);
  };

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.grid__container}>
          <div className={styles.grid__list}>
            {(opened ? array : array.slice(0, limit)).map((card) => (
              <li key={card.id}>
                <Card card={card} star book find block />
              </li>
            ))}
          </div>
        </div>
      </div>
      {!opened && array.length > limit && (
        <Button className={styles.open} onClick={() => showMore()}>
          {t('buttons.show-all')}
        </Button>
      )}
    </>
  );
};

export default Grid;
