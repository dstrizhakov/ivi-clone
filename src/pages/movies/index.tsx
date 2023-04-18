import React from "react";
import { Htag } from "@/components/Htag/Htag";
import Description from "@/components/Description/Description";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Head from "next/head";

const Index = () => {

  const breadcrumbs = [
    { name: 'Мой Иви', path: '/'},
    { name: 'Фильмы', path: '/movies'},
  ]
  return (
    <>
      <Head>
        <title>Смотреть фильмы онлайн</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs}/>
      <Htag tag={'h2'}>Фильмы смотреть онлайн</Htag>
      <Description/>
    </>
  );
};

export default Index;
