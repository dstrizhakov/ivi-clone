import React, { FC, useEffect } from 'react';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import Carousel from '../Carousel/Carousel';
import { WatchPageProps } from './WatchPage.props';
import Card from '@/components/Card/Card';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import i18next from 'i18next';
import { setPersonItems } from '@/store/reducers/modals.slice';
import { useAppDispatch } from '@/hooks/redux';
import { moviesData } from '@/mock/moviesData';
import MovieInfo from '@/components/WatchPage/MovieInfo/MovieInfo';
const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPersonItems(movie));
  }, [movie]);

  const { name, enName, trailer, persons } = movie;
  const color = '106, 80, 47'; //

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
            <MovieInfo movie={movie} />
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
          {moviesData.slice(0, 15).map((card) => (
            <Card card={card} book key={card.id} />
          ))}
        </Carousel>
        <PersonsGallery list={persons} />
      </section>
    </>
  );
};

export default WatchPage;
