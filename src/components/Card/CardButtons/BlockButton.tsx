import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';
import { Button } from '@/components/Button/Button';

const BlockButton = () => {
  const [blocked, setBlocked] = useState<boolean>(false);

  const blockMovie = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBlocked((blocked) => !blocked);
  };
  return (
    <Button size={'M'} appearance={'square'} onClick={(e) => blockMovie(e)}>
      {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
    </Button>
  );
};

export default BlockButton;
