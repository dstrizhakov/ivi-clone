import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';

const AddToFavoritesButton = () => {
  const [booked, setBooked] = useState<boolean>(false);

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBooked((booked) => !booked);
  };
  return (
    <Button appearance={BtnA.square} onClick={(e) => addToFavorite(e)}>
      {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Button>
  );
};

export default AddToFavoritesButton;
