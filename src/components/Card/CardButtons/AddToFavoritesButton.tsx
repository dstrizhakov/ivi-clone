import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { Button } from '@/components/Button/Button';

const AddToFavoritesButton = () => {
  const [booked, setBooked] = useState<boolean>(false);

  const addToFavorite = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBooked((booked) => !booked);
  };
  return (
    <Button size={'M'} appearance={'square'} onClick={(e) => addToFavorite(e)}>
      {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Button>
  );
};

export default AddToFavoritesButton;
