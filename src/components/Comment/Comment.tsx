import React, { FC, useState } from 'react';
import styles from './Comment.module.scss';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import CommentInput from '@/components/Comment/CommentInput';
import LikeButton from '@/components/Comment/Buttons/LikeButton';
import DisLikeButton from '@/components/Comment/Buttons/DisLikeButton';
import { useTranslation } from 'react-i18next';
import { BtnA, BtnS } from '@/components/Button/Button.props';
import { IComment } from '@/types/types';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';

interface iCommentComp {
  comment: IComment;
}

const Comment: FC<iCommentComp> = ({ comment }): JSX.Element => {
  const [answer, setAnswer] = useState<boolean>(false);
  const value = Math.round(Math.random() * 200 - 100);
  const { t } = useTranslation();
  const { personModalItem } = useAppSelector(selectModal);
  const writeDate = (date) => {
    const now = new Date(date);
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
  };
  return (
    <li className={styles.comment}>
      <header className={styles.user_info}>
        <CommentAvatar user={comment?.user} />
        <cite className={styles.item_cite}>{comment?.user?.name}</cite>
        <time className={styles.item_date}>{writeDate(comment?.date)}</time>
        <div className={styles.vote}>
          <LikeButton />
          <div
            className={`${styles.value} ${value > 0 && styles.success} ${
              value < 0 && styles.danger
            }`}
          >
            {value}
          </div>
          <DisLikeButton />
        </div>
      </header>
      <div className={styles.clause}>
        <div className={styles.clause_text}>
          <P color={'white'}>{comment?.clause}</P>
        </div>
      </div>
      <div className={styles.interactions}>
        <Button size={BtnS.S} appearance={BtnA.transparent} onClick={() => setAnswer((a) => !a)}>
          {answer ? t('buttons.collapse') : t('buttons.answer')}
        </Button>
      </div>
      {answer && <CommentInput id={personModalItem?.id} parentId={comment?.id} />}
      {comment.children && (
        <ul>
          {comment.children.map((child) => (
            <Comment key={child.id} comment={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Comment;
