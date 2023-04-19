import React, { FC } from 'react';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import { IMovie } from '@/types/types';
import { PersonList } from './PersonList/PersonList';
import Carousel from '../Carousel/Carousel';


const WatchPage: FC<WatchPageProps> = ({ item }) => {
  const { name, enName, descr, trailer, year, countrys, rating, genres, duration, persons } = item;
  return (
    <>
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.watch__player}>
              <Player url={trailer} />
              <img src={trailer} alt={enName} />
            </div>
            <div className={styles.watch__info}>
              <div className={styles.watch__title}>
                <Htag tag="h2">{`Фильм ${name} смотреть онлайн`}</Htag>
              </div>
              <div className={styles.watch__params}>
                <P>
                  {year} {duration}
                </P>
                <P>
                  {countrys} {genres}
                </P>
              </div>
              <div className={styles.watch__rating}>
                <PersonList list={persons} rating={rating} />
              </div>
              <div className={styles.watch__description}>
                <P>{descr}</P>
              </div>
              <div className={styles.watch__medallions}></div>
            </div>
          </div>
        </div>
        <Carousel title={`С фильмом «${name}» смотрят`} route={'/'} />
      </section>
    </>
  );
};

export default WatchPage;
