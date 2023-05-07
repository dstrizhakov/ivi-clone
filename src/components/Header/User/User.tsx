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
import { setIsLogin } from '@/store/reducers/app.slice';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Htag } from '@/components/Htag/Htag';
import Image from 'next/image';
import children from '../../../../public/children.png';
import SelectProfile from '@/components/Auth/SelectProfile/SelectProfile';

const User: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const { data: session } = useSession();

  const login = () => {
    push('/profile');
    dispatch(setIsLogin(true));
  };

  return (
    <div className={styles.user__content}>
      <div className={styles.content__row}>
        <div className={styles.content__actions}>
          <LinkCard icon={BiMoviePlay} title="Покупки" link="/pirchases" />
          <LinkCard icon={HiOutlineBookmark} title="Смотреть позже" link="/pirchases" />
          <LinkCard icon={IoTimerOutline} title="История просмотров" link="/pirchases" />
          <LinkCard
            icon={IoDiamondOutline}
            title="Покупки"
            link="/pirchases"
            subtitle="Подключить"
            status="red"
          />
          <LinkCard icon={BiCertification} title="Активация сертификата" link="/pirchases" />
          <LinkCard icon={TbDeviceTvOld} title="Вход по коду" link="/pirchases" />
          <LinkCard icon={GoCreditCard} title="Способы оплаты" link="/pirchases" />
        </div>
        <div className={styles.content__auth}>
          {!session && (
            <Button size="L" appearance="red" onClick={() => login()}>
              <span className={styles.content__nowrap}>Войти или зарегистрироваться</span>
            </Button>
          )}
          {/* Выбор профайла */}
          <SelectProfile />
          <div className={styles.content__links}>
            {session && (
              <Link href="https://www.ivi.tv/profile/profile_info">Редактировать профиль</Link>
            )}
            <Link href={'https://www.ivi.tv/profile/settings'}>Настройки</Link>
            <Link href={'https://ask.ivi.ru/'}>Помощь</Link>
            {session && <span onClick={() => signOut()}>Выйти</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
