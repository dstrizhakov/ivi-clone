import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { Roles, selectAuth } from '@/store/reducers/auth.slice';
import { Htag } from '@/components/Htag/Htag';

const Admin = () => {
  const { t } = useTranslation();
  const { role } = useAppSelector(selectAuth);

  if (role !== Roles.user) return <NotFoundPage />; //todo: fix when slice is ready
  return (
    <>
      <Head>
        {/*<title>{t('title.admin')}</title>*/}
        <title> Панель администратора </title>
      </Head>
      <div>
        <Htag tag={'h3'}>{t('descriptions.admin')}</Htag>
      </div>
    </>
  );
};

export default Admin;
