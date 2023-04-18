import React from "react";
import { Htag } from "@/components/Htag/Htag";
import Description from "@/components/Description/Description";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Head from "next/head";
import Animation from "@/components/Animation/Animation";
import Descript from "@/components/Descript/Descript";
import { P } from "@/components/P/P";

const Index = () => {

  const breadcrumbs = [
    { name: 'Мой Иви', path: '/'},
    { name: 'Мультфильмы', path: '/animation'},
  ]
  return (
    <>
      <Head>
        <title>Смотреть мультфильмы онлайн</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs}/>
      <Animation/>
    </>
  );
};

export default Index;
