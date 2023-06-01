import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';

const BlockButton = () => {
  const [blocked, setBlocked] = useState<boolean>(false);

  const blockMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setBlocked((blocked) => !blocked);
  };
  return (
    <Button appearance={BtnA.square} onClick={(e) => blockMovie(e)}>
      {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
    </Button>
  );
};

export default BlockButton;
