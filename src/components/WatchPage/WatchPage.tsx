import React from 'react';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';

export interface WatchPageProps {
  item: any;
}

const WatchPage = ({ item }) => {
  const { name, description, rating, url } = item;
  return (
    <>
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.watch__player}>
              <Player url={url} />
            </div>
            <div className={styles.watch__info}>
              <div className={styles.watch__title}>
                <Htag tag="h2">{`Фильм ${name} смотреть онлайн`}</Htag>
              </div>
              <div className={styles.watch__params}></div>
              <div className={styles.watch__medallions}></div>
              <div className={styles.watch__description}>
                <P>{description}</P>
              </div>
              <div className={styles.watch__rating}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchPage;
