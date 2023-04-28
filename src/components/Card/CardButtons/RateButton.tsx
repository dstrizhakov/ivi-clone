import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Button } from '@/components/Button/Button';

const RateButton = ({ openRating }) => {
  const openRatingModal = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (openRating) {
      openRating();
    }
  };
  return (
    <Button size={'M'} appearance={'square'} onClick={(e) => openRatingModal(e)}>
      <AiOutlineStar />
    </Button>
  );
};

export default RateButton;
