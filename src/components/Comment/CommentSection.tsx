import React, { FC } from 'react';
import CommentInput from '@/components/Comment/CommentInput';
import Comment from '@/components/Comment/Comment';
import styles from './Comment.module.scss';
import { useFetchCommentsQuery } from '@/services/comments.api';
import Loader from '@/components/Loader/Loader';

interface ICommentSection {
  id: string | number;
}

const CommentSection: FC<ICommentSection> = ({ id }): JSX.Element => {
  const { data: comments, isLoading, error } = useFetchCommentsQuery({ id });
  const coms = comments?.commentsData || null;
  return (
    <div className={styles.comment_section}>
      <div>!!!warn: answers works with only first level children!!!</div>
      <CommentInput id={id} />
      <ul>
        {isLoading && <Loader />}
        {!error && coms?.length
          ? [...coms]
              .sort((a, b) => a.id - b.id)
              .map((comment) => <Comment comment={comment} key={comment.id} />)
          : ''}
      </ul>
    </div>
  );
};

export default CommentSection;
