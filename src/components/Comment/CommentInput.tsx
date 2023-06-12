import React, { FC, useState } from 'react';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import { Button } from '@/components/Button/Button';
import styles from './Comment.module.scss';
import { BtnA } from '@/components/Button/Button.props';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';
import { useAddCommentMutation, useFetchCommentsQuery } from '@/services/comments.api';
import { selectModal } from '@/store/reducers/modals.slice';
const LIMIT = 5;

const CommentInput: FC = ({ id, parentId }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { personModalItem } = useAppSelector(selectModal);
  const [query, setQuery] = useState<string>('');
  const { user } = useAppSelector(selectAuth);
  const { data: comments } = useFetchCommentsQuery({ id });
  const { data: session } = useSession();
  const [addComment] = useAddCommentMutation();
  const validate = () => {
    return query?.length < LIMIT && query?.length;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    const newComment = {
      id: self.crypto.randomUUID(),
      user: user?.name ? user : { userId: `user${self.crypto.randomUUID()}`, name: 'Guest' },
      date: Date.now(),
      clause: query,
    };
    e.nativeEvent.preventDefault();
    if (!comments?.commentsData) return;
    if (!parentId) {
      addComment({
        comment: {
          id: personModalItem?.id,
          commentsData: [...comments?.commentsData, newComment],
        },
        id,
      });
    } else {
      const cut = JSON.parse(JSON.stringify(comments.commentsData)).filter(
        (comment) => comment.id !== parentId
      );
      const newCut = JSON.parse(JSON.stringify(comments.commentsData)).find(
        (comment) => comment.id === parentId
      );
      newCut?.children?.length
        ? newCut.children.push(newComment)
        : (newCut.children = [newComment]);
      addComment({
        comment: {
          id: personModalItem?.id,
          commentsData: [...cut, newCut],
        },
        id,
      });
    }
    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={(e) => submit(e)}>
      <CommentAvatar user={session?.user || user || null} />
      <div className={styles.input_container}>
        <div className={`${styles.input} ${validate() ? styles.invalid : ''}`}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label>{t('buttons.write-comment')}</label>
          <div className={styles.stripe} />
        </div>
        <div className={`${styles.caption} ${styles.danger}`}>
          {validate()
            ? i18n.language == 'en'
              ? `At least ${LIMIT} characters, you entered ${query.length}`
              : `Минимум ${LIMIT} символов, вы ввели ${query.length}`
            : ''}
        </div>
      </div>
      <Button appearance={BtnA.red} disabled={!!(validate() || !query?.length)}>
        {t('buttons.send')}
      </Button>
    </form>
  );
};

export default CommentInput;
