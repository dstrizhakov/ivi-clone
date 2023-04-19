import React, { FC, useState } from 'react';
import styles from './MovieList.module.scss';

import { P } from '@/components/P/P';
import { iMovieCard } from './MovieCard/MovieCard.props';
import { Htag } from '@/components/Htag/Htag';
import MovieCard from './MovieCard/MovieCard';
import { MovieListProps } from './MovieLisrt.props';

const MovieList: FC<MovieListProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <Htag tag={'h3'}>Полная фильмография</Htag>
        <P>{list.length} фильмов</P>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {list.slice(0, 8).map((card) => {
          return <MovieCard key={card.id} card={card} />;
        })}
        {!isOpen && list.length > 8 ? (
          <P onClick={() => setIsOpen(true)} className={styles.link}>
            Ещё {list.length - 8} фильма
          </P>
        ) : (
          list.slice(8, list.length).map((card) => {
            return <MovieCard key={card.id} card={card} />;
          })
        )}
      </div>
    </div>
  );
};

export default MovieList;
