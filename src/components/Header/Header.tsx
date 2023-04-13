import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { Button } from '../Button/Button';
import SearchButton from '../Search/SearchButton/SearchButton';
import SearchModal from '../Search/SearchModal/SearchModal';
import Alerts from '../Alerts/Alerts';
import { BiUser } from 'react-icons/bi';
import User from '../User/User';

const Header: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  return (
    <>
      <SearchModal isOpen={isSearchOpen} closeSearch={() => setIsSearchOpen(false)} />
      <header className="header">
        <div className="container">
          <div className={styles.row}>
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
              <Button size="S" appearance="red">
                Смотреть 30 дней бесплатно
              </Button>
              <SearchButton openSearch={() => setIsSearchOpen(true)} />
            </div>
            <Alerts />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
