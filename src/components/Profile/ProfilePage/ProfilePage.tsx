import React, { useState } from 'react';
import styles from './ProfilePage.module.scss';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';
import { BtnA } from '@/components/Button/Button.props';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import SubscriptionsButton from '@/components/Profile/ProfilePage/ProfileBtns/SubscriptionsButton';
import CertificatesButton from '@/components/Profile/ProfilePage/ProfileBtns/CertificatesButton';
import PresentSubscriptionButton from '@/components/Profile/ProfilePage/ProfileBtns/PresentSubscriptionButton';
import InviteFriendsButton from '@/components/Profile/ProfilePage/ProfileBtns/InviteFriendsButton';
import NotificationsButton from '@/components/Profile/ProfilePage/ProfileBtns/NotificationsButton';
import PurchasesButton from '@/components/Profile/ProfilePage/ProfileBtns/PurchasesButton';
import WatchLaterButton from '@/components/Profile/ProfilePage/ProfileBtns/WatchLaterButton';
import ViewedButton from '@/components/Profile/ProfilePage/ProfileBtns/ViewedButton';
import PaymentButton from '@/components/Profile/ProfilePage/ProfileBtns/PaymentButton';
import CodeLoginButton from '@/components/Profile/ProfilePage/ProfileBtns/CodeLoginButton';
import SettingsButton from '@/components/Profile/ProfilePage/ProfileBtns/SettingsButton';
import SupportButton from '@/components/Profile/ProfilePage/ProfileBtns/SupportButton';
import BalanceButton from '@/components/Profile/ProfilePage/ProfileBtns/BalanceButton';
import ProfileSelector from '@/components/Profile/ProfileSelector/ProfileSelector';
import EditProfile from '@/components/Profile/EditProfile';
import ChecksButton from '@/components/Profile/ProfilePage/ProfileBtns/ChecksButton';
import LoginButton from '@/components/Profile/LoginButton/LoginButton';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { logout, selectAuth, setUser } from '@/store/reducers/auth.slice';
import { useRegisterMutation } from '@/services/auth.api';
import InputFileButton from '@/components/InputFileButton/InputFileButton';

const ProfilePage = ({ ...props }) => {
  const { t } = useTranslation();
  const { user, photo } = useAppSelector(selectAuth);
  const [selectedImage, setSelectedImage] = useState<null | File | undefined>(null);

  const dispatch = useAppDispatch();

  const logoutFunc = () => {
    dispatch(logout());
  };

  const [register] = useRegisterMutation();

  const testReg = () => {
    const fd = new FormData();
    fd.append('email', `test${Date.now()}@aaa.aaa`);
    fd.append('password', `aaaa1111`);
    fd.append('name', `TestName`);
    fd.append('surname', `TestSurname`);
    fd.append('nickname', `test${Date.now()}@aaa.aaa`);
    fd.append('country', `Россия`);
    fd.append('city', `Москва`);
    selectedImage && fd.append('photo', selectedImage);

    register(fd)
      .unwrap()
      .then((res) => {
        dispatch(setUser(res));
        console.log(photo);
      })
      .catch((rejected) => console.error(rejected));
  };

  return (
    <div className={styles.profile__btns} {...props}>
      {user && (
        <div className={styles.select_profile}>
          <div className={styles.select_container}>
            <ProfileSelector />
          </div>
        </div>
      )}
      <div className={'test'} style={{ display: 'flex' }}>
        <InputFileButton setSelected={setSelectedImage} />
        <Button onClick={testReg}>send</Button>
      </div>
      {user ? (
        <EditProfile />
      ) : (
        <div className={styles.login_button}>
          <LoginButton />
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
        {user && (
          <li className={`${styles.list__item} ${styles.smalls}`}>
            <ChecksButton />
          </li>
        )}
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <SettingsButton />
        </li>
        <li className={`${styles.list__item} ${styles.smalls}`}>
          <SupportButton />
        </li>
      </ul>
      <div className={styles.bottom}>
        {user ? (
          <>
            <Button
              appearance={BtnA.transparent}
              onClick={logoutFunc}
              title={t('buttons.logout') || 'Выйти'}
            >
              <RiLogoutBoxRLine />
              {t('buttons.logout')}
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

export default ProfilePage;

// const fd = new FormData();
// fd.append('email', `test${Date.now()}@aaa.aaa`);
// fd.append('password', `aaaa1111`);
// fd.append('name', `TestName`);
// fd.append('surname', `TestSurname`);
// fd.append('nickname', `test${Date.now()}@aaa.aaa`);
// fd.append('country', `Россия`);
// fd.append('city', `Москва`);
// fd.append('photo', selectedImage);
