import Head from 'next/head';
import React, { FC } from 'react';
import EmptyNotifications from '@/components/EmptyNotifications/EmptyNotifications';

const Notifications: FC = () => {
  return (
    <>
      <Head>
        <title>Мой профиль / ivi.ru</title>
      </Head>
      <EmptyNotifications />
    </>
  );
};

export default Notifications;
