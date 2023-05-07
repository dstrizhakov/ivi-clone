import { FC } from 'react';
import { PersonsGalleryProps } from './PersonsGallery.props';
import cn from 'classnames';

import styles from './PersonsGallery.module.scss';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { nameToLink } from '@/helpers/nameToLink';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list, openModal }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title} onClick={() => openModal()}>
        <Htag tag={'h4'}>Актёры и создатели</Htag>
      </div>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          {list.map((person) => {
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
                  {person.name.split(' ').map((n) => (
                    <p key={person.enName} className={styles.name}>
                      {n}
                    </p>
                  ))}
                  <P size="S">актёр</P>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={cn(styles.card, styles.card__text)} onClick={() => openModal()}>
          Ещё
        </div>
      </div>
    </div>
  );
};
