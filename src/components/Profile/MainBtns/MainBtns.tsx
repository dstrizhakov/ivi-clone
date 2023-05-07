import React from 'react';
import styles from './MainBtns.module.scss';
import { TiUserOutline } from 'react-icons/ti';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { useAppDispatch } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import SubscriptionsButton from '@/components/Profile/MainBtns/ProfileBtns/SubscriptionsButton';
import CertificatesButton from '@/components/Profile/MainBtns/ProfileBtns/CertificatesButton';
import PresentSubscriptionButton from '@/components/Profile/MainBtns/ProfileBtns/PresentSubscriptionButton';
import InviteFriendsButton from '@/components/Profile/MainBtns/ProfileBtns/InviteFriendsButton';
import NotificationsButton from '@/components/Profile/MainBtns/ProfileBtns/NotificationsButton';
import PurchasesButton from '@/components/Profile/MainBtns/ProfileBtns/PurchasesButton';
import WatchLaterButton from '@/components/Profile/MainBtns/ProfileBtns/WatchLaterButton';
import ViewedButton from '@/components/Profile/MainBtns/ProfileBtns/ViewedButton';
import PaymentButton from '@/components/Profile/MainBtns/ProfileBtns/PaymentButton';
import CodeLoginButton from '@/components/Profile/MainBtns/ProfileBtns/CodeLoginButton';
import SettingsButton from '@/components/Profile/MainBtns/ProfileBtns/SettingsButton';
import SupportButton from '@/components/Profile/MainBtns/ProfileBtns/SupportButton';
import BalanceButton from '@/components/Profile/MainBtns/ProfileBtns/BalanceButton';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';
import { setShowAuth } from '@/store/reducers/modals.slice';
import { BtnA, BtnS } from '@/components/Button/Button.props';
import { signOut, useSession } from 'next-auth/react';
import { Htag } from '@/components/Htag/Htag';
import Link from 'next/link';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import ProfileSelector from '@/components/Profile/ProfileSelector/ProfileSelector';

const MainBtns = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const openLoginModal = () => {
    dispatch(setShowAuth(true));
  };
  const { data: session } = useSession();

  const { t } = useTranslation();
  return (
    <div className={styles.profile__btns} {...props}>
      {session && (
        <div className={styles.select_profile}>
          <ProfileSelector />
        </div>
      )}
      {session && session?.user ? (
        <div className={styles.userinfo}>
          <div className={styles.userinfo__title}>
            <div className={styles.title__text}>
              <Htag tag={'h2'}>{t('sections.profile')}</Htag>
              <P>{t('sections.main-profile')}</P>
            </div>
            <Link href={'/profile'}>
              <Button>
                <HiOutlinePencil />
                {t('buttons.edit-profile')}
              </Button>
            </Link>
          </div>
          <div className={styles.userinfo__information}>
            <div className={styles.info}>
              <BsEnvelope />
              {session.user?.email ? (
                <P size={'S'}>{session.user?.email}</P>
              ) : (
                <Button
                  appearance={BtnA.transparent}
                  size={BtnS.S}
                  title={t('buttons.add-email') || ''}
                >
                  {t('buttons.add-email')}
                </Button>
              )}
            </div>
            <div className={styles.info}>
              <BsPhone />
              <Button
                appearance={BtnA.transparent}
                size={BtnS.S}
                title={t('buttons.add-phone') || ''}
              >
                {t('buttons.add-phone')}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.login}>
          <Button
            onClick={() => openLoginModal()}
            size={BtnS.S}
            appearance={BtnA.red}
            title={t('buttons.login-signup') || 'Войти или зарегестрироваться'}
          >
            <TiUserOutline />
            {t('buttons.login-signup')}
          </Button>
        </div>
      )}

      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.subscription}`}>
          <SubscriptionsButton />
        </li>
        <li className={`${styles.list__item} ${styles.certificate}`}>
          <CertificatesButton type={iCardEnum.rect_text} />
        </li>
        <li className={`${styles.list__item} ${styles.fund}`}>
          <BalanceButton />
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.subscription_present}`}>
          <PresentSubscriptionButton type={iCardEnum.rect_icon_light} />
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.referral_program}`}>
          <InviteFriendsButton />
        </li>
        <li className={`${styles.list__item} ${styles.notifications}`}>
          <NotificationsButton />
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <PurchasesButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <WatchLaterButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <ViewedButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <PaymentButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <CodeLoginButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <SettingsButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <SupportButton />
        </li>
      </ul>
      <div className={styles.bottom}>
        {session && session?.user ? (
          <>
            <Button appearance={BtnA.transparent} onClick={() => signOut()}>
              <RiLogoutBoxRLine />
              Выйти
            </Button>
            <div className={styles.id}>
              <P>uid: 2049522430</P>
            </div>
          </>
        ) : (
          <div className={styles.id}>
            <P>uid: 2049522430</P>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBtns;
