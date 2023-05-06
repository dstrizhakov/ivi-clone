import React, { FC } from 'react';
import styles from './Categories.module.scss';
import Link from 'next/link';
import { ILink } from '@/types/types';
import { CategoriesProps } from './Categories.props';

const Categories: FC<CategoriesProps> = ({
  genres,
  countries,
  years,
  collections,
}): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.content__items}>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Жанры</h5>
          <div className={styles.content__genres}>
            {genres &&
              genres.map((item: ILink) => (
                <Link className={styles.content__link} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Страны</h5>
          <div className={styles.content__countries}>
            {countries &&
              countries.map((item: ILink) => (
                <Link className={styles.content__link} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
          <h5 className={styles.content__title}>Годы</h5>
          <div className={styles.content__years}>
            {years &&
              years.map((item: ILink) => (
                <Link className={styles.content__link} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.content__collections}>
        <div className={styles.collections__collection}>
          {collections &&
            collections.map((item: ILink) => (
              <Link className={styles.collections__link} key={item.title} href={item.link}>
                {item.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
