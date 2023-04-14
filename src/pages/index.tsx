import Head from 'next/head';
import React, { FC } from 'react';
import Description from '@/components/Description/Description';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Description />
    </>
  );
};

export default Home;
