import React from 'react';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { Htag } from '@/components/Htag/Htag';
import i18next from 'i18next';
import { P } from '@/components/P/P';
import { PersonList } from '@/components/WatchPage/PersonList/PersonList';

const Info = ({ movie }) => {
  const {
    name,
    enName,
    description,
    enDescription,
    year,
    countries,
    rating,
    genres,
    duration,
    persons,
  } = movie;
  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <Htag tag="h2">
          {i18next.language == 'en'
            ? `Movie ${enName ? enName : name} watch online`
            : `Фильм ${name} смотреть онлайн`}
        </Htag>
      </div>
      <div className={styles.watch__params}>
        <P>
          {year} {duration}
        </P>
        <P>
          {countries} {genres}
        </P>
      </div>
      <div className={styles.watch__rating}>
        <PersonList list={persons} rating={rating} />
      </div>
      <div className={styles.watch__description}>
        <P>{i18next.language == 'en' ? enDescription && enDescription : description}</P>
      </div>
      <div className={styles.watch__medallions}></div>
    </div>
  );
};

export default Info;
