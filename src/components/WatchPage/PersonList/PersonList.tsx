import { IPerson } from '@/types/types';
import { FC, ReactNode } from 'react';
import { PersonListProps } from './PersonList.props';

import styles from './PersonList.module.scss';
import Link from 'next/link';
import PersonCard from './PersonCard/PersonCard';

export const PersonList: FC<PersonListProps> = ({ list, rating, head }) => {
  return (
    <div className={styles.list}>
      <>
        <PersonCard>{rating}</PersonCard>
        {list.map((item) => {
          return <PersonCard key={item.enName} person={item} />;
        })}
      </>
    </div>
  );
};
