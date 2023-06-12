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
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import CommentSection from '@/components/Comment/CommentSection';
import { useTranslation } from 'react-i18next';
import { Htag } from '@/components/Htag/Htag';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { data: movies, error, isLoading } = useFetchAllFilmsQuery({ limit: 15 });
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    dispatch(setPersonItems(movie));
    const fac = new FastAverageColor();
    if (movie.card_image) {
      fac
        .getColorAsync(movie.card_image, {
          algorithm: 'simple',
        })
        .then((color) => {
          setBgColor(() => color.hex);
        });
    }
  }, [dispatch, movie]);

  const { id, title, originalTitle, name, enName, trailer, persons: personsData } = movie;
  const filmName = title || name || null;
  const enFilmName = originalTitle || enName || null;

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
              <Player url={trailer || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
            </div>
            <MovieInfo movie={movie} />
          </div>
        </div>
        <Carousel
          title={
            i18next.language == 'en'
              ? `Movies similar to «${enFilmName || filmName}»`
              : `С фильмом «${filmName}» смотрят`
          }
          route={'/'}
          showAll
        >
          {!isLoading && !error && movies.map((card) => <Card card={card} book key={card?.id} />)}
        </Carousel>
        <PersonsGallery
          list={
            personsData?.actor && personsData?.director
              ? [...personsData.actor, ...personsData.director]
              : personsData
          }
        />
        <div className={styles.comments}>
          <Htag tag={'h4'}>{t('categories.comments')}</Htag>
        </div>
        <CommentSection id={id} />
      </section>
    </>
  );
};

export default WatchPage;
