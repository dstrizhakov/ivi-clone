import { IPerson } from '@/types/types';
import { FC, ReactNode } from 'react';
import { PersonListProps } from './PersonList.props';

import styles from './PersonList.module.scss';
import Link from 'next/link';

export const PersonList: FC<PersonListProps> = ({ list, rating }) => {
  interface PersonCard {
    person?: IPerson;
    children?: ReactNode;
  }

  const PersonCard: FC<PersonCard> = ({ person, children }) => {
    const name = person?.enName.toLowerCase().split(' ').join('-');
    return (
      <div className={styles.wrapCard}>
        {person ? (
          <Link href={`/person/${name}`}>
            <div className={styles.person}>
              <img src={person.url} alt={person.enName} />
            </div>
          </Link>
        ) : (
          <div className={styles.rating}>{children}</div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.list}>
      <PersonCard>{rating}</PersonCard>
      {list.map((item) => {
        return <PersonCard key={item.enName} person={item} />;
      })}
    </div>
  );
};
