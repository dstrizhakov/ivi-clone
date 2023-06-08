import { FC } from 'react';
import { PersonListProps } from './PersonList.props';

import styles from './PersonList.module.scss';
import PersonCard from './PersonCard/PersonCard';

export const PersonList: FC<PersonListProps> = ({ list, rating }) => {
  return (
    <div className={styles.list}>
      <PersonCard>{rating}</PersonCard>
      {list?.length &&
        list.slice(0, 4).map((item) => {
          return <PersonCard key={item.id} person={item} />;
        })}
    </div>
  );
};
