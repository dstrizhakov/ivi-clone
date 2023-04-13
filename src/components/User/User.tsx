import React, { FC } from 'react';
import styles from './User.module.scss';
import { BiUser } from 'react-icons/bi';
import { Button } from '../Button/Button';
import LinkCard from '../LinkCard/LinkCard';
import { BiMoviePlay } from 'react-icons/bi';

const User: FC = () => {
  return (
    <div className={styles.user} title="Войти в профиль">
      <BiUser className={styles.user__button} />
      <div className={styles.user__body}>
        <span className={styles.user__border}></span>
        <div className={styles.user__content}>
          <div className={styles.content__row}>
            <div className={styles.content__actions}>
              <LinkCard icon={BiMoviePlay} title="Покупки" link="/pirchases" />
              <LinkCard icon={BiMoviePlay} title="Смотреть позже" link="/pirchases" />
              <LinkCard icon={BiMoviePlay} title="История просмотров" link="/pirchases" />
              <LinkCard
                icon={BiMoviePlay}
                title="Покупки"
                link="/pirchases"
                subtitle="Подключить"
                status="red"
              />
              <LinkCard icon={BiMoviePlay} title="Активация сертификата" link="/pirchases" />
              <LinkCard icon={BiMoviePlay} title="Вход по коду" link="/pirchases" />
            </div>
            <div className={styles.content__auth}>
              <Button size="L" appearance="red">
                <span className={styles.content__nowrap}>Войти или зарегистрироваться</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
