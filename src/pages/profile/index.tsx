import React from 'react';
import Head from 'next/head';
import MainBtns from '@/components/Profile/MainBtns/MainBtns';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Мой профиль / ivi.ru</title>
      </Head>
      <MainBtns />
    </>
  );
};

export default Profile;
