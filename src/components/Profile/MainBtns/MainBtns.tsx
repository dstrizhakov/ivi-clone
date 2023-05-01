import React from 'react';
import styles from './MainBtns.module.scss';
import { TiUserOutline } from 'react-icons/ti';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { useAppDispatch } from '@/hooks/redux';
import { setIsLogin } from '@/store/reducers/app.slice';
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
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.types';

const MainBtns = ({ ...props }) => {
  const dispatch = useAppDispatch();

  const openLoginModal = () => {
    dispatch(setIsLogin(true));
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.profile__btns} {...props}>
        <div className={styles.login}>
          <Button
            onClick={() => openLoginModal()}
            size={'S'}
            appearance={'red'}
            title={t('buttons.login-signup') || 'login'}
          >
            <TiUserOutline />
            {t('buttons.login-signup')}
          </Button>
        </div>
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
        <div className={styles.id}>
          <P>uid: 2049522430</P>
        </div>
      </div>
    </>
  );
};

export default MainBtns;
