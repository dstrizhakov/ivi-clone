import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import AnimationPageDescription from '@/components/AnimationPage/AnimationPageDescription';

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
      <AnimationPageDescription />
    </>
  );
};

export default Index;
