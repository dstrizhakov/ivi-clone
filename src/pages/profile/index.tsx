import React from 'react';
import Head from 'next/head';
import ProfilePage from '@/components/Profile/ProfilePage/ProfilePage';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.profile') || 'Мой профиль / ivi.ru'}</title>
      </Head>
      <ProfilePage />
    </>
  );
};

export default Profile;
