import React, { FC } from 'react';
import styles from './PersonCard.module.scss';
import { PersonCardProps } from './PersonCard.props';
import Link from 'next/link';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const PersonCard: FC<PersonCardProps> = ({ person, children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.person_card}>
      {person ? (
        <>
          <div className={styles.wrapCard}>
            <Link href={`/person/${person.id}`}>
              <div className={styles.person}>
                <Image width={44} height={44} src={person.url} alt={person.name} />
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
            <div className={styles.rating}>{children || '9.0'}</div>
          </div>
          <div className={styles.card_name} title={t('categories.rating')}>
            {t('categories.rating')}
          </div>
        </>
      )}
    </div>
  );
};

export default PersonCard;
