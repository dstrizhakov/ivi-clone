import { FC } from 'react';
import { PersonsGalleryProps } from './PersonsGallery.props';
import cn from 'classnames';

import styles from './PersonsGallery.module.scss';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { nameToLink } from '@/helpers/nameToLink';
import { setShowPersonsModal } from '@/store/reducers/modals.slice';
import { useDispatch } from 'react-redux';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className={styles.wrap}>
      <div className={styles.title} onClick={() => dispatch(setShowPersonsModal(true))}>
        <Htag tag={'h4'}>
          {i18next.language == 'en' ? 'Actors and creators' : 'Актёры и создатели'}
        </Htag>
      </div>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          {[...new Set(list)].map((person) => {
            return (
              <Link
                href={`/person/${nameToLink(person.enName)}`}
                key={person.enName}
                className={styles.link}
              >
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
        <div
          className={cn(styles.card, styles.card__text)}
          onClick={() => dispatch(setShowPersonsModal(true))}
        >
          {t('buttons.more')}
        </div>
      </div>
    </div>
  );
};
