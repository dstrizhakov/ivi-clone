import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import SeriesPageDescription from '@/components/SeriesPage/SeriesPageDescription';

const Index = () => {
  const breadcrumbs = [
    { name: 'Мой Иви', path: '/' },
    { name: 'Сериалы', path: '/series' },
  ];
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <SeriesPageDescription />
    </div>
  );
};

export default Index;
