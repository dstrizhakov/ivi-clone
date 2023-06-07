import { FC } from 'react';
import { P } from '../P/P';
import MovieList from './MoviesList/MovieList';
import { PersonProps } from './Person.props';
import { Htag } from '../Htag/Htag';
import styles from './Person.module.scss';
import BackButton from '../BackButton/BackButton';
import i18next from 'i18next';
import { moviesData } from '@/mock/moviesData';
import Image from 'next/image';

export const PersonInfo: FC<PersonProps> = ({ person }) => {
  const { photo: url, fullNameEn: enName, fullName: name, description } = person;
  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <Image width={240} height={380} src={url} alt={enName} />
        </div>
        <Htag tag={'h1'}>{i18next.language == 'en' ? enName : name}</Htag>
        <P key={url}>{i18next.language == 'ru' && enName}</P>
        <P color={'gray-light'} className={styles.descr}>
          {description || ''}
        </P>
        <MovieList list={moviesData} />
      </div>
    </>
  );
};
