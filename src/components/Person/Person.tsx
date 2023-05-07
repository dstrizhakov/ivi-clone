import { FC } from 'react';
import { P } from '../P/P';
import MovieList from './MoviesList/MovieList';
import { PersonProps } from './Person.props';
import { Htag } from '../Htag/Htag';
import styles from './Person.module.scss';
import BackButton from '../BackButton/BackButton';
import i18next from 'i18next';

export const PersonInfo: FC<PersonProps> = ({ person }) => {
  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <img src={person.url} alt={person.enName} />
        </div>
        <Htag tag={'h1'}>{i18next.language == 'en' ? person.enName : person.name}</Htag>
        <P key={person.url}>{i18next.language == 'ru' && person.enName}</P>
        <P color={'gray-light'} className={styles.descr}>
          {person.description}
        </P>
        <MovieList list={person.films} />
      </div>
    </>
  );
};
