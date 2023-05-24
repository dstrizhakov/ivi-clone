import React, { FC } from 'react';
import styles from './Grid.module.scss';
import { useTranslation } from 'react-i18next';
import { IMovie } from '@/types/types';
import Card from '@/components/Card/Card';

interface iGrid {
  array: IMovie[];
  loading?: boolean;
}

const Grid: FC<iGrid> = ({ array }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.grid__container}>
          <ul className={styles.grid__list}>
            {array.map((card, index) => (
              <li className={styles.grid_item} key={card?.id || index}>
                <Card card={card} star book find block />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*{!extended && array.length > limit && (*/}
      {/*  <Button className={styles.open} onClick={() => showMore()}>*/}
      {/*    {t('buttons.show-more')}*/}
      {/*  </Button>*/}
      {/*)}*/}
    </>
  );
};

export default Grid;
