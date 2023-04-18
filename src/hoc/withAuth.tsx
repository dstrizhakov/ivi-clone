import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const withAuth = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const AuthComponent = (props: T) => {
    // todo: определиться со структурой стора
    const isAuthenticated = true;
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const router = useRouter();

    if (!isAuthenticated) {
      router.push('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
