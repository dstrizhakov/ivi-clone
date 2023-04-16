import React, { FC } from 'react';
import styles from './Categories.module.scss';
import Link from 'next/link';

export interface ILink {
  title: string;
  link: string;
}

const Genres: ILink[] = [
  { title: 'Артхаус', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Биография', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Боевики', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Вестерн', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Военные', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Детективы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Для всей семьи', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Для детей', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Документальные', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Драмы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Исторические', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Катастрофы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Комедии', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Криминал', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Мелодрамы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Мистические', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Приключения', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Спорт', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Триллеры', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Ужасы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фантастика', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фэнтези', link: 'https://www.ivi.tv/movies/arthouse' },
];
const Countries: ILink[] = [
  { title: 'Русские', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Зарубежные', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Американские', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Советское кино', link: 'https://www.ivi.tv/movies/arthouse' },
];
const Years: ILink[] = [
  { title: 'Фильмы 2023 года', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фильмы 2022 года', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фильмы 2021 года', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фильмы 2020 года', link: 'https://www.ivi.tv/movies/arthouse' },
];
const Collections: ILink[] = [
  { title: 'Новинки', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Подборки', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Иви.Рейтинг', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Трейлеры', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Что посмотреть', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фильмы в HD', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Новинки подписки', link: 'https://www.ivi.tv/movies/arthouse' },
];

const Categories: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__items}>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Жанры</h5>
          <div className={styles.content__genres}>
            {Genres &&
              Genres.map((item: ILink) => (
                <Link className={styles.content__link} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Страны</h5>
          <div className={styles.content__countries}>
            {Countries &&
              Countries.map((item: ILink) => (
                <Link className={styles.content__link} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
          <h5 className={styles.content__title}>Годы</h5>
          <div className={styles.content__years}>
            {Years &&
              Years.map((item: ILink) => (
                <Link className={styles.content__link} key={item.title} href={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.content__collections}>
        <div className={styles.collections__collection}>
          {Collections &&
            Collections.map((item: ILink) => (
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
