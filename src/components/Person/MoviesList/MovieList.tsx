import React, { FC, useState } from 'react';
import styles from './MovieList.module.scss';

import { P } from '@/components/P/P';
import { Htag } from '@/components/Htag/Htag';
import MovieCard from './MovieCard/MovieCard';
import { MovieListProps } from './MovieList.props';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const MovieList: FC<MovieListProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <Htag tag={'h3'}>{t('descriptions.complete-filmography')}</Htag>
        <P>
          {list?.length} {i18next.language == 'en' ? 'movies' : 'фильмов'}
        </P>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {list?.slice(0, 8).map((card) => {
          return <MovieCard key={card.id} card={card} />;
        })}
        {!isOpen && list?.length > 8 ? (
          <P onClick={() => setIsOpen(true)} className={styles.link}>
            {t('buttons.more')} {list?.length - 8}
            {i18next.language == 'en' ? ' movies' : ` фильм${list?.length < 1 ? 'а' : ''}`}
          </P>
        ) : (
          list?.slice(8, list?.length).map((card) => {
            return <MovieCard key={card.id} card={card} />;
          })
        )}
      </div>
    </div>
  );
};

export default MovieList;
