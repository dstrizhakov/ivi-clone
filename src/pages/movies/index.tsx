import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import MoviesPageDescription from '@/components/MoviesPage/MoviesPageDescription';

const Index = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/' },
    { name: 'Фильмы', path: '/movies' },
  ];
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MoviesPageDescription />
    </div>
  );
};

export default Index;
