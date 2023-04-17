import React, { FC, useState } from 'react';
import styles from './MovieList.module.scss';

import { P } from '@/components/P/P';
import { iMovieCard } from './MovieCard/MovieCard.props';
import { Htag } from '@/components/Htag/Htag';
import MovieCard from './MovieCard/MovieCard';
const src1 =
  'https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85';
const src2 =
  'https://thumbs.dfs.ivi.ru/storage28/contents/0/8/3d2850061083ba6946ad877bc9102d.jpg/234x360/?q=85';

const MovieList: FC = () => {
  const cards: iMovieCard[] = [
    { id: 1, name: 'Name', year: '2020', rating: '4.5', img: src1 },
    { id: 2, name: 'Name2', year: '2021', rating: '4.2', img: src2 },
    { id: 3, name: 'Name3', year: '2020', rating: '4.5', img: src1 },
    { id: 4, name: 'Name4', year: '2021', rating: '4.2', img: src2 },
    { id: 5, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
    { id: 6, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
    { id: 7, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
    { id: 8, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
    { id: 9, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
    { id: 10, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <Htag tag={'h3'}>Полная фильмография</Htag>
        <P>{cards.length} фильмов</P>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {cards.slice(0, 8).map((card) => {
          return <MovieCard key={card.id} card={card} />;
        })}
        {!isOpen ? (
          <P onClick={() => setIsOpen(true)} className={styles.link}>
            Ещё {cards.length - 8} фильма
          </P>
        ) : (
          cards.slice(8, cards.length).map((card) => {
            return <MovieCard key={card.id} card={card} />;
          })
        )}
      </div>
    </div>
  );
};

export default MovieList;
