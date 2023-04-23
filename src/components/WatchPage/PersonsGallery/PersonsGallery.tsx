import { FC } from 'react';
import { PersonsGalleryProps } from './PersonsGallery.props';
import cn from 'classnames';

import styles from './PersonsGallery.module.scss';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  return (
    <div className={styles.wrap}>
      <Link href={'#'}>
        <Htag tag={'h4'}>Актёры и создатели</Htag>
      </Link>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          {list.map((person) => {
            const name = person?.enName.toLowerCase().split(' ').join('-');
            return (
              <Link href={`/person/${name}`} key={person.enName} className={styles.link}>
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
        <Link href={'#'} className={cn(styles.card, styles.card__text)}>
          Ещё
        </Link>
      </div>
    </div>
  );
};
