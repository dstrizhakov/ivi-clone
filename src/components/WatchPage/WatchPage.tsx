import React, { FC, useEffect } from 'react';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import { PersonList } from './PersonList/PersonList';
import Carousel from '../Carousel/Carousel';
import { WatchPageProps } from './WatchPage.props';
import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import Card from '@/components/Card/Card';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import i18next from 'i18next';
import { setPersonItems } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectMovies } from '@/store/reducers/movie.slice';
const WatchPage: FC<WatchPageProps> = ({ id }) => {
  const item = moviesData.find((m: IMovie) => id == m.id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPersonItems(item));
  }, [item]);

  const {
    name,
    enName,
    description,
    enDescription,
    trailer,
    year,
    countries,
    rating,
    genres,
    duration,
    persons,
  } = item;
  const color = '106, 80, 47'; //
  const { movies } = useAppSelector(selectMovies);

  return (
    <>
      <div className={styles.bg_color}>
        <div
          className={styles.bg_container}
          style={{
            background: `linear-gradient(rgb(${color}) 0%, rgba(${color}, 0) 100%)`,
          }}
        />
      </div>
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.watch__player}>
              <Player url={trailer} />
            </div>
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
          </div>
        </div>
        <Carousel
          title={
            i18next.language == 'en'
              ? `Movies similar to «${enName ? enName : name}»`
              : `С фильмом «${name}» смотрят`
          }
          route={'/'}
        >
          {movies.map((card) => (
            <Card card={card} book key={card.id} />
          ))}
        </Carousel>
        <PersonsGallery list={persons} />
      </section>
    </>
  );
};

export default WatchPage;
