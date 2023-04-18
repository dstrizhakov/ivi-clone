import React from "react";
import { Htag } from "@/components/Htag/Htag";
import Description from "@/components/Description/Description";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const Index = () => {

  const breadcrumbs = [
    { name: 'Мой Иви', path: '/'},
    { name: 'Мультфильмы', path: '/animation'},
  ]
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs}/>
      <Htag tag={'h2'}>Мультфильмы смотреть онлайн</Htag>
      <Description/>
    </div>
  );
};

export default Index;
