import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import Animation from '@/components/Animation/Animation';

const Index = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/' },
    { name: 'Мультфильмы', path: '/animation' },
  ];
  return (
    <>
      <Head>
        <title>Смотреть мультфильмы онлайн</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <Animation />
    </>
  );
};

export default Index;
