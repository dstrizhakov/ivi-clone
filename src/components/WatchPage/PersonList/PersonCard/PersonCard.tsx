import React, { FC } from 'react';
import styles from './PersonCard.module.scss';
import { PersonCardProps } from './PersonCard.props';

import Link from 'next/link';

const PersonCard: FC<PersonCardProps> = ({ person, children }) => {
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

export default PersonCard;
