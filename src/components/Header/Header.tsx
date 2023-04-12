import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import { HiOutlineBellAlert } from 'react-icons/hi2';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className={styles.body}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="iviLogo.svg" alt="logo" width={80} height={40} />
            </Link>
          </div>
          <div className={styles.menu}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link href="/">Мой Иви</Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="/">Что нового</Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="/">Фильмы</Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="/">Сериалы</Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="/">Мультфильмы</Link>
              </li>
            </ul>
          </div>
          <div className={styles.button}>Смотреть 30 дней бесплатно</div>
          <Search />
          <div className={styles.alerts}>
            <HiOutlineBellAlert className={styles.alerts__button} />
            <div className={styles.alerts__body}>
              <HiOutlineBellAlert className={styles.alerts__icon} />
              <p>Здесь появляются только важные сообщения</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
