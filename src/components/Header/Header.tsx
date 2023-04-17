import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { Button } from '../Button/Button';
import SearchButton from '@/components/Header/Search/SearchButton/SearchButton';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';
import Alerts from '@/components/Header/Alerts/Alerts';
import User from '@/components/Header/User/User';
import Submenu from '@/components/Header/Submenu/Submenu';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { BiUser } from 'react-icons/bi';
import Categories from './Categories/Categories';
import { movieCategories } from '@/mock/MovieCategories';

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
                  <Image src="iviLogo.svg" alt="logo" width={100} height={50} />
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
                    <Submenu title="Фильмы">
                      <Categories
                        genres={movieCategories.genres}
                        countries={movieCategories.countries}
                        years={movieCategories.years}
                        collections={movieCategories.collections}
                      />
                    </Submenu>
                  </li>
                  <li className={styles.menu__item}>
                    <Submenu title="Сериалы">
                      <Categories
                        genres={movieCategories.genres}
                        countries={movieCategories.countries}
                        years={movieCategories.years}
                        collections={movieCategories.collections}
                      />
                    </Submenu>
                  </li>
                  <li className={styles.menu__item}>
                    <Submenu title="Мультфильмы">
                      <Categories
                        genres={movieCategories.genres}
                        countries={movieCategories.countries}
                        years={movieCategories.years}
                        collections={movieCategories.collections}
                      />
                    </Submenu>
                  </li>
                </ul>
              </div>
              <Button size="S" appearance="red">
                Смотреть 30 дней бесплатно
              </Button>
              <SearchButton openSearch={() => setIsSearchOpen(true)} />
            </div>
            <div className={styles.actions}>
              <Submenu icon={HiOutlineBellAlert} route={'/notifications'}>
                <Alerts />
              </Submenu>
              <Submenu icon={BiUser} route={'/profile'} outline>
                <User />
              </Submenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
