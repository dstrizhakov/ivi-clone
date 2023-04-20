import React, { FC } from 'react';
import styles from './PersonCard.module.scss';
import { PersonCardProps } from './PersonCard.props';

import Link from 'next/link';

const PersonCard: FC<PersonCardProps> = ({ person, children }) => {
  const name = person?.enName.toLowerCase().split(' ').join('-');
  return (
    <div className={styles.person_card}>
      {person ? (
        <>
          <div className={styles.wrapCard}>
            <Link href={`/person/${name}`}>
              <div className={styles.person}>
                <img src={person.url} alt={person.name} />
              </div>
            </Link>
          </div>
          <div className={styles.card_name}>{person.name}</div>
        </>
      ) : (
        <>
          <div className={styles.wrapCard}>
            <div className={styles.rating}>{children}</div>
          </div>
          <div className={styles.card_name}>Рейтинг иви</div>
        </>
      )}
    </div>
  );
};

export default PersonCard;
