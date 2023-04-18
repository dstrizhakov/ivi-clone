import React from "react";
import { Htag } from "@/components/Htag/Htag";
import Description from "@/components/Description/Description";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Head from "next/head";

const Index = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/'},
    { name: 'Сериалы', path: '/series'},
  ]
  return (
    <>
      <Head>
        <title>Смотреть сериалы онлайн</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs}/>
      <Htag tag={'h2'}>Сериалы смотреть онлайн</Htag>
      <Description/>
    </>
  );
};

export default Index;
