import React, { FC, useState } from 'react';
import styles from './Grid.module.scss';
import { useTranslation } from 'react-i18next';
import { IMovie } from '@/types/types';
import Card from '@/components/Card/Card';
import { Button } from '@/components/Button/Button';

interface iGrid {
  array: IMovie[];
  loading?: boolean;
}
const BASE_LIMIT = 14;

const Grid: FC<iGrid> = ({ array }) => {
  const { t } = useTranslation();
  const [limit, setLimit] = useState(BASE_LIMIT);
  const [isLoading, setIsLoading] = useState(false);
  const showMore = async () => {
    await setIsLoading(() => true);
    await setLimit((prev) => prev + BASE_LIMIT);
    await setTimeout(() => {
      setIsLoading(() => false);
    }, 800);
  };

  return (
    <>
      <div className={styles.grid}>
        {array?.length && (
          <div className={styles.grid__container}>
            <ul className={styles.grid__list}>
              {array.slice(0, limit).map((card, index) => (
                <li className={styles.grid_item} key={card?.id || index}>
                  <Card card={card} star book find block />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {array?.length > limit &&
        (isLoading ? (
          <div className={`${styles.open} loader`}></div>
        ) : (
          <Button className={styles.open} onClick={() => showMore()}>
            {t('buttons.show-more')}
          </Button>
        ))}
    </>
  );
};

export default Grid;
