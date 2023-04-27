import React from 'react';
import { IoColorWandOutline } from 'react-icons/io5';
import styles from '@/components/Card/Card.module.scss';
import { Button } from '@/components/Button/Button';
import { useRouter } from 'next/navigation';

const FindSimilarButton = () => {
  const router = useRouter();

  const findSimilar = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    router.push('/movies');
  };
  return (
    <Button size={'L'} onClick={(e) => findSimilar(e)}>
      <IoColorWandOutline className={styles.mirrored} />
    </Button>
  );
};

export default FindSimilarButton;
