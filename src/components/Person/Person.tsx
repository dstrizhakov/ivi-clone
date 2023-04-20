import { FC } from 'react';
import { P } from '../P/P';
import MovieList from './MoviesList/MovieList';
import { PersonProps } from './Person.props';
import { Htag } from '../Htag/Htag';
import styles from './Person.module.scss';
import BackButton from '../BackButton/BackButton';

export const PersonInfo: FC<PersonProps> = ({ person }) => {
  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.img}>
          <img src={person.url} alt={person.enName} />
        </div>
        <Htag tag={'h1'}>{person.name}</Htag>
        <P key={person.url}>{person.enName}</P>
        <P color={'gray-light'} className={styles.descr}>
          {person.descr}
        </P>
        <MovieList list={person.films} />
      </div>
    </>
  );
};