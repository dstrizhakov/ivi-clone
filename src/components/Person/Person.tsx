import { FC } from 'react';
import { P } from '../P/P';
import MovieList from './MoviesList/MovieList';
import { PersonProps } from './Person.props';
import { Htag } from '../Htag/Htag';
import styles from './Person.module.scss';
import BackButton from '../BackButton/BackButton';
import i18next from 'i18next';
import Image from 'next/image';
import { useFetchAllFilmsQuery } from '@/services/movie.api';

export const PersonInfo: FC<PersonProps> = ({ person }) => {
  const { photo, url, fullNameEn, enName, fullName, name, description } = person;
  const { data: movies } = useFetchAllFilmsQuery({ limit: 15 });

  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <Image width={120} height={144} src={url || photo} alt={enName || fullNameEn} />
        </div>
        <Htag tag={'h1'}>{i18next.language == 'en' ? enName || fullNameEn : name || fullName}</Htag>
        <P key={url}>{(i18next.language == 'ru' && enName) || fullNameEn}</P>
        <P color={'gray-light'} className={styles.descr}>
          {description || ''}
        </P>
        <MovieList list={movies} />
      </div>
    </>
  );
};
