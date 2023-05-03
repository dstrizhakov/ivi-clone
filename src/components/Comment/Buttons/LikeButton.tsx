import React, { useState } from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Button } from '@/components/Button/Button';

const LikeButton = () => {
  const [like, setLike] = useState(false);
  return (
    <Button
      appearance={'transparent'}
      className={`${styles.buttonUp} ${like ? styles.active : ''}`}
      onClick={() => setLike((l) => !l)}
    >
      {like ? <AiFillLike /> : <AiOutlineLike />}
    </Button>
  );
};

export default LikeButton;
