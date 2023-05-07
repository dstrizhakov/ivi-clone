import React, { useEffect, useState } from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { GiPresent } from 'react-icons/gi';
import { TbBellRinging, TbVectorTriangle } from 'react-icons/tb';
import { BiSupport, BiWallet } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { RxCountdownTimer } from 'react-icons/rx';
import { AiFillCreditCard, AiOutlinePlaySquare } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import styles from './MainBtns.module.scss';
import { TiUserOutline } from 'react-icons/ti';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import Link from 'next/link';
import AuthModal from '@/components/Auth/AuthModal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsLogin } from '@/store/reducers/app.slice';
import { useSession } from 'next-auth/react';
import SelectProfile from '@/components/Auth/SelectProfile/SelectProfile';

const MainBtns = ({ ...props }) => {
  const { data: session } = useSession();

  const isLogin = useAppSelector((state) => state.appReducer.isLogin);
  const dispatch = useAppDispatch();

  const closeLoginModal = () => {
    dispatch(setIsLogin(false));
  };
  const openLoginModal = () => {
    dispatch(setIsLogin(true));
  };

  return (
    <>
      <AuthModal isOpen={isLogin} close={() => closeLoginModal()} />
      <div className={styles.profile__btns} {...props}>
        {!session ? (
          <div className={styles.login}>
            <Button onClick={() => openLoginModal()} size={'S'} appearance={'red'}>
              <TiUserOutline />
              Войти или зарегистрироваться
            </Button>
          </div>
        ) : (
          <div className={styles.login}>
            <SelectProfile tag="h4" />
          </div>
        )}
        <ul className={styles.list}>
          <li className={`${styles.list__item} ${styles.subscription}`}>
            <Link href={'https://www.ivi.ru/profile/subscriptions'}>
              <ProfileButton type={'rect_text'}>
                <>
                  <div>Подписки</div>
                  <div>Перейти к подключению</div>
                </>
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.certificate}`}>
            <ProfileButton type={'rect_text'}>
              <>
                <div>Сертификаты и промокоды</div>
                <div>Активировать</div>
              </>
            </ProfileButton>
          </li>
          <li className={`${styles.list__item} ${styles.fund}`}>
            <ProfileButton type={'rect_text'}>
              <>
                <div>Счёт Иви</div>
                <div>0 &#8381;</div>
              </>
            </ProfileButton>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={`${styles.list__item} ${styles.subscription_present}`}>
            <Link href={'https://widget.mgc-loyalty.ru/iviru/landing'} target={'_blank'}>
              <ProfileButton type={'rect_icon_light'} icon={GiPresent}>
                Подарите подписку близким
              </ProfileButton>
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={`${styles.list__item} ${styles.referral_program}`}>
            <Link href={'https://www.ivi.ru/profile/referral'} target={'_blank'}>
              <ProfileButton type={'rect_icon'} icon={TbVectorTriangle}>
                Пригласить друзей
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.notifications}`}>
            <Link href={'https://www.ivi.ru/profile/pull_notifications'} target={'_blank'}>
              <ProfileButton type={'rect_icon'} icon={TbBellRinging}>
                Уведомления и акции
              </ProfileButton>
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <Link href={'https://www.ivi.ru/profile/favorites'} target={'_blank'}>
              <ProfileButton type={'square_icon'} icon={BiWallet}>
                Покупки
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <Link href={'https://www.ivi.ru/profile/watched'} target={'_blank'}>
              <ProfileButton type={'square_icon'} icon={BsBookmark}>
                Смотреть позже
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <Link href={'https://www.ivi.ru/profile/cards'} target={'_blank'}>
              <ProfileButton type={'square_icon'} icon={RxCountdownTimer}>
                Просмотры
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <Link href={'https://www.ivi.ru/profile/purchases'} target={'_blank'}>
              <ProfileButton type={'square_icon'} icon={AiFillCreditCard}>
                Способы оплаты
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <ProfileButton
              type={'square_icon'}
              icon={AiOutlinePlaySquare}
              onClick={() => console.log('modal open')}
            >
              Вход по коду
            </ProfileButton>
          </li>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <Link href={'https://www.ivi.ru/profile/settings'} target={'_blank'}>
              <ProfileButton type={'square_icon'} icon={FiSettings}>
                Настройки
              </ProfileButton>
            </Link>
          </li>
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <Link href={'https://ask.ivi.ru/'} target={'_blank'}>
              <ProfileButton type={'square_icon'} icon={BiSupport}>
                Помощь
              </ProfileButton>
            </Link>
          </li>
        </ul>
        <div className={styles.id}>
          <P>uid: 2049522430</P>
        </div>
      </div>
    </>
  );
};

export default MainBtns;
