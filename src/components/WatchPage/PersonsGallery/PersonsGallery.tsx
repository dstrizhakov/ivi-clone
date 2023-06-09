import { FC } from 'react';
import { PersonsGalleryProps } from './PersonsGallery.props';
import cn from 'classnames';
import styles from './PersonsGallery.module.scss';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';
import { setShowPersonsModal } from '@/store/reducers/modals.slice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const open = () => {
    dispatch(setShowPersonsModal(true));
  };
  return (
    <>
      {list.length > 0 && (
        <div className={styles.wrap}>
          <div className={styles.title} onClick={() => open()}>
            <Htag tag={'h4'}>{t('sections.actors-creators')}</Htag>
          </div>
          <div className={styles.list}>
            <div className={styles.list__wrap}>
              {[...new Set(list)].map((person) => {
                return (
                  <Link
                    href={`/person/${person.id}`} //href={`/person/${nameToLink(person.enName)}`}
                    key={person.id}
                    className={styles.link}
                  >
                    <div className={styles.card}>
                      <Image src={person.url} width={88} height={88} alt="" />
                    </div>
                    <div>
                      {(i18n.language == 'en' ? person.enName : person.name).split(' ').map((n) => (
                        <p key={person.id + n} className={styles.name}>
                          {n}
                        </p>
                      ))}
                      <P size="S">{i18n.language == 'en' ? 'actor' : 'актер'}</P>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className={cn(styles.card, styles.card__text)} onClick={() => open()}>
              {t('buttons.more')}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
