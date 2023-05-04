import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import styles from './Header.module.scss';
import { Button } from '../Button/Button';
import SearchButton from '@/components/Header/Search/SearchButton/SearchButton';
import Alerts from '@/components/Header/Alerts/Alerts';
import User from '@/components/Header/User/User';
import Submenu from '@/components/Header/Submenu/Submenu';
import { MdNotificationsNone } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import Categories from './Categories/Categories';
import { movieCategories } from '@/mock/movieCategories';
import { seriesCategories } from '@/mock/seriesCategories';
import { cartoonCategories } from '@/mock/cartoonCategories';
import logo from '@/../public/iviLogo.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { BtnA, BtnS } from '@/components/Button/Button.props';

const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();
  useEffect(() => {
    const language = localStorage.getItem('language') || 'ru';
    i18next.changeLanguage(language);
  }, []);
  const changeLanguage = async (e, language) => {
    e.preventDefault();
    await i18next.changeLanguage(language);
    localStorage.setItem('language', language);
  };
  return (
    <header className="header">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={logo} alt="logo" width={66} height={48} />
              </Link>
            </div>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <Link href="/" className={styles.menu__link}>
                    {t('sections.my-ivi')}
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link href="https://www.ivi.tv/new" className={styles.menu__link}>
                    {t('sections.whats-new')}
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.movies')} link="/movies">
                    <Categories
                      genres={movieCategories.genres}
                      countries={movieCategories.countries}
                      years={movieCategories.years}
                      collections={movieCategories.collections}
                    />
                  </Submenu>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.series')} link="/series">
                    <Categories
                      genres={seriesCategories.genres}
                      countries={seriesCategories.countries}
                      years={seriesCategories.years}
                      collections={seriesCategories.collections}
                    />
                  </Submenu>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.animation')} link="/animation">
                    <Categories
                      genres={cartoonCategories.genres}
                      countries={cartoonCategories.countries}
                      years={cartoonCategories.years}
                      collections={cartoonCategories.collections}
                    />
                  </Submenu>
                </li>
                <li>
                  <div style={{ display: 'flex', margin: '0 10px 0 110px' }}>
                    <Button
                      size={BtnS.S}
                      onClick={(e) => changeLanguage(e, 'ru')}
                      appearance={i18next.language == 'ru' ? BtnA.red : BtnA.rectangle}
                    >
                      RU
                    </Button>
                    <Button
                      size={BtnS.S}
                      onClick={(e) => changeLanguage(e, 'en')}
                      appearance={i18next.language == 'en' ? BtnA.red : BtnA.rectangle}
                    >
                      EN
                    </Button>
                  </div>
                </li>
              </ul>
            </nav>
            <div className={styles.zindex}>
              <Button size={BtnS.S} appearance={BtnA.red}>
                {t('header.watch-free')}
              </Button>
            </div>
            <SearchButton />
          </div>
          <div className={styles.actions}>
            <Submenu icon={MdNotificationsNone} link={'/notifications'}>
              <Alerts />
            </Submenu>
            <Submenu icon={BiUser} link={'/profile'} outline>
              <User />
            </Submenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
