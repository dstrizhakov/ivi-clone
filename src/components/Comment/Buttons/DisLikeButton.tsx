import React, { FC, useState } from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';

const DisLikeButton: FC = (): JSX.Element => {
  const [dislike, setDislike] = useState(false);
  return (
    <Button
      appearance={BtnA.transparent}
      className={`${styles.buttonDown} ${dislike ? styles.active : ''}`}
      onClick={() => setDislike((l) => !l)}
    >
      {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
    </Button>
  );
};

export default DisLikeButton;
