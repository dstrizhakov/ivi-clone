import { FC } from 'react';
import { P } from '../P/P';
import { MovieProps } from './Movie.props';
import { Htag } from '../Htag/Htag';
import styles from './Movie.module.scss';
import { PersonList } from './PersonList/PersonList';

export const MovieInfo: FC<MovieProps> = ({ movie }) => {
  const color = '126, 182, 183'; //
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
