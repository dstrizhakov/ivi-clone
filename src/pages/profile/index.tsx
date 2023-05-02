import React from 'react';
import Head from 'next/head';
import MainBtns from '@/components/Profile/MainBtns/MainBtns';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.profile')}</title>
        {/*<title> Мой профиль / ivi.ru </title>*/}
      </Head>
      <MainBtns />
    </>
  );
};

export default Profile;
