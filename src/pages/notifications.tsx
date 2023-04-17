import Head from 'next/head';
import React, { FC } from 'react';
import { Htag } from '@/components/Htag/Htag';
import BackButton from '@/components/BackButton/BackButton';

const Notifications: FC = () => {
  return (
    <>
      <Head>
        <title>Мой профиль / ivi.ru</title>
      </Head>
      <BackButton />
      <Htag tag="h2">Уведомления и акции</Htag>
    </>
  );
};

export default Notifications;
