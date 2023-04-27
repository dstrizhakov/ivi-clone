import { FC } from 'react';
import { PersonsGalleryProps } from './PersonsGallery.props';
import cn from 'classnames';

import styles from './PersonsGallery.module.scss';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrap}>
      <Link href={'#'}>
        <Htag tag={'h4'}>
          {i18next.language == 'en' ? 'Actors and creators' : 'Актёры и создатели'}{' '}
        </Htag>
      </Link>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          {[...new Set(list)].map((person) => {
            const name = person?.enName.toLowerCase().split(' ').join('-');
            return (
              <Link href={`/person/${name}`} key={person.id} className={styles.link}>
                <div className={styles.card}>
                  <img src={person.url} alt="" />
                </div>
                <div>
                  {(i18next.language == 'en' ? person.enName : person.name).split(' ').map((n) => (
                    <p key={person.id + n} className={styles.name}>
                      {n}
                    </p>
                  ))}
                  <P size="S">{i18next.language == 'en' ? 'actor' : 'актер'}</P>
                </div>
              </Link>
            );
          })}
        </div>
        <Link href={'#'} className={cn(styles.card, styles.card__text)}>
          {t('buttons.more')}
        </Link>
      </div>
    </div>
  );
};
