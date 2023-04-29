import React, { FC, useState } from 'react';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import { PersonList } from './PersonList/PersonList';
import Carousel from '../Carousel/Carousel';
import { WatchPageProps } from './WatchPage.props';
import { PersonsGallery } from './PersonsGallery/PersonsGallery';
import { PersonsModal } from './PersonsModal/PersonsModal';

const WatchPage: FC<WatchPageProps> = ({ item }) => {
  const { name, enName, descr, trailer, year, countrys, rating, genres, duration, persons } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PersonsModal isOpen={isOpen} item={item} closeModal={() => setIsOpen(false)} />

      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.watch__player}>
              <Player url={trailer} />
            </div>
            <div className={styles.watch__info}>
              <div className={styles.watch__title}>
                <Htag tag="h2">{`Фильм ${name} смотреть онлайн`}</Htag>{' '}
                <div className={styles.watch__params}>
                  <P>
                    {year} {duration}
                  </P>
                  <P>
                    {countrys} {genres}
                  </P>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.watch__rating}>
                <PersonList list={persons} rating={rating} />
              </div>
              <div className={styles.watch__description}>
                <P>{descr}</P>
              </div>
              <div className={styles.watch__medallions}></div>
            </div>
          </div>
        </div>
        <Carousel title={`С фильмом «${name}» смотрят`} route={'/'} />
        <PersonsGallery list={persons} openModal={() => setIsOpen(true)} />
      </section>
    </>
  );
};

export default WatchPage;
