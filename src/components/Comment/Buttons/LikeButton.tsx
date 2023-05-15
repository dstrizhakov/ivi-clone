import React, { FC, useState } from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';

const LikeButton: FC = (): JSX.Element => {
  const [like, setLike] = useState(false);
  return (
    <Button
      appearance={BtnA.transparent}
      className={`${styles.buttonUp} ${like ? styles.active : ''}`}
      onClick={() => setLike((l) => !l)}
    >
      {like ? <AiFillLike /> : <AiOutlineLike />}
    </Button>
  );
};

export default LikeButton;
