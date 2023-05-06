import React, { FC } from 'react';
import styles from './User.module.scss';
import { Button } from '../../Button/Button';
import LinkCard from '@/components/Header/LinkCard/LinkCard';
import { BiCertification, BiMoviePlay } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { IoDiamondOutline, IoTimerOutline } from 'react-icons/io5';
import { TbDeviceTvOld } from 'react-icons/tb';
import { GoCreditCard } from 'react-icons/go';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux';
import { useSession, signOut } from 'next-auth/react';
import { Htag } from '@/components/Htag/Htag';
import Image from 'next/image';
import { setShowAuth } from '@/store/reducers/modals.slice';
import { useTranslation } from 'react-i18next';
import children from '@/../public/children.png';

const User: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  const { t } = useTranslation();
  const login = () => {
    dispatch(setShowAuth(true));
  };

  return (
    <div className={styles.user__content}>
      <div className={styles.content__row}>
        <div className={styles.content__actions}>
          <LinkCard icon={BiMoviePlay} title={t('buttons.purchases')} link="/purchases" />
          <LinkCard icon={HiOutlineBookmark} title={t('buttons.watch-later')} link="/purchases" />
          <LinkCard icon={IoTimerOutline} title={t('buttons.views-story')} link="/purchases" />
          <LinkCard
            icon={IoDiamondOutline}
            title={t('buttons.subscriptions')}
            link="/purchases"
            subtitle={t('buttons.connect')}
            status="red"
          />
          <LinkCard
            icon={BiCertification}
            title={t('buttons.activate-certificate')}
            link="/purchases"
          />
          <LinkCard icon={TbDeviceTvOld} title={t('buttons.code-login')} link="/purchases" />
          <LinkCard icon={GoCreditCard} title={t('buttons.payment')} link="/purchases" />
        </div>
        <div className={styles.content__auth}>
          {!session && (
            <Link href={'/profile'}>
              <Button size="L" appearance="red" onClick={() => login()}>
                <span className={styles.content__nowrap}>{t('buttons.login-signup')}</span>
              </Button>
            </Link>
          )}
          {/* Создать отдельный компонент профайла */}
          {session && (
            <div className={styles.content__profile}>
              <div className={styles.profile__title}>
                <Htag tag="h3">Выбор профиля</Htag>
              </div>
              <div className={styles.profile__row}>
                <div className={styles.profile__user}>
                  {session.user && session.user?.image && (
                    <Image
                      className={styles.profile__image}
                      src={session.user.image}
                      alt="user"
                      width={48}
                      height={48}
                    />
                  )}
                  <span>{session.user?.email || session.user?.name}</span>
                </div>
                <div className={`${styles.profile__user} ${styles.profile__item}`}>
                  <Image
                    className={styles.profile__image}
                    src={children}
                    alt="children"
                    width={40}
                    height={40}
                  />
                  <span>Дети</span>
                </div>
                <div className={`${styles.profile__user} ${styles.profile__item}`}>
                  <div className={styles.profile__addProfile}></div>
                  {/* <Image
                    className={styles.profile__image}
                    src={children}
                    alt="children"
                    width={40}
                    height={40}
                  /> */}
                  <span>Новый</span>
                </div>
              </div>
            </div>
          )}

          <div className={styles.content__links}>
            {session && (
              <Link href="https://www.ivi.tv/profile/profile_info">
                {t('buttons.edit-profile')}
              </Link>
            )}
            <Link href={'https://www.ivi.tv/profile/settings'}>{t('buttons.settings')}</Link>
            <Link href={'https://ask.ivi.ru/'}>{t('buttons.support')}</Link>
            {session && <span onClick={() => signOut()}>Выйти</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
