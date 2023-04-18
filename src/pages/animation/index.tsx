import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import AnimationPageDescription from '@/components/AnimationPage/AnimationPageDescription';

const Index = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/' },
    { name: 'Мультфильмы', path: '/animation' },
  ];
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <AnimationPageDescription />
    </div>
  );
};

export default Index;
