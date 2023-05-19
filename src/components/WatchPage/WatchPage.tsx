import React, { FC, useEffect, useState } from 'react';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import Carousel from '../Carousel/Carousel';
import { WatchPageProps } from './WatchPage.props';
import Card from '@/components/Card/Card';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import i18next from 'i18next';
import { setPersonItems } from '@/store/reducers/modals.slice';
import { useAppDispatch } from '@/hooks/redux';
import MovieInfo from '@/components/WatchPage/MovieInfo/MovieInfo';
import { FastAverageColor } from 'fast-average-color';
import { useFetchAllMoviesQuery } from '@/services/movie.api';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { data: movies, error, isLoading } = useFetchAllMoviesQuery({ limit: 15 });
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    const fac = new FastAverageColor();

    dispatch(setPersonItems(movie));
    fac
      .getColorAsync(movie.card_image, {
        algorithm: 'simple',
      })
      .then((color) => {
        setBgColor(() => color.hex);
      });
  }, [dispatch, movie]);

  const { name, enName, trailer, persons } = movie;

  return (
    <>
      <div
        className={styles.bg_container}
        style={{
          background: `linear-gradient(${bgColor} 0%, transparent 100%)`,
        }}
      />
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
          {!isLoading && !error && movies.map((card) => <Card card={card} book key={card.id} />)}
        </Carousel>
        <PersonsGallery list={persons} />
      </section>
    </>
  );
};

export default WatchPage;
