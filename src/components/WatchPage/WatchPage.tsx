import React, { FC } from 'react';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import styles from './WatchPage.module.scss';
import { IMovie } from '@/types/types';
import { PersonList } from './PersonList/PersonList';

export interface WatchPageProps {
  movie: IMovie;
}

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const color = '42, 140, 142'; //
  return (
    <>
      <div
        className={styles.bg_container}
        style={{
          background: `linear-gradient(rgb(${color}) 0%, rgba(${color}, 0) 100%)`,
        }}
      />
      <div className="container">
        <div className={styles.movie}>
          <div className={styles.img}>
            <img src={movie.trailer} alt={movie.enName} />
          </div>
          <div className={styles.info}>
            <Htag tag={'h3'}>{movie.name}</Htag>
            <div>
              <P>
                {movie.year} {movie.duration}
              </P>
              <P>
                {movie.countrys} {movie.genres}
              </P>
            </div>
            <PersonList list={movie.persons} rating={movie.rating} />
            <P color={'gray-light'} className={styles.descr}>
              {movie.descr}
            </P>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
