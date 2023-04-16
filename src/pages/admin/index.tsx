import React from 'react';
import NotFoundPage from '@/pages/404';

const Admin = () => {
  const auth = true;
  if (!auth) return <NotFoundPage />;
  return <div>страница админки</div>;
};

export default Admin;
