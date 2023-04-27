import React, { FC } from 'react';
import styles from './PersonCard.module.scss';
import { PersonCardProps } from './PersonCard.props';

import Link from 'next/link';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const PersonCard: FC<PersonCardProps> = ({ person, children }) => {
  const name = person?.enName.toLowerCase().split(' ').join('-');
  const { t } = useTranslation();
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
          <div className={styles.card_name}>
            {i18next.language == 'en' ? person.enName : person.name}
          </div>
        </>
      ) : (
        <>
          <div className={styles.wrapCard}>
            <div className={styles.rating}>{children}</div>
          </div>
          <div className={styles.card_name}>{t('categories.rating')}</div>
        </>
      )}
    </div>
  );
};

export default PersonCard;
