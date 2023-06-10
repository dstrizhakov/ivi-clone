import { useRouter } from 'next/navigation';
import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';

const withAuth = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  return (props: T) => {
    // todo: определиться со структурой стора
    const { user } = useAppSelector(selectAuth);
    const router = useRouter();

    if (!user) {
      router.push('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
