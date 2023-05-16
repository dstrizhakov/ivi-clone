import React, { FC, useEffect, useState } from 'react';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import { Button } from '@/components/Button/Button';
import styles from './Comment.module.scss';
import { BtnA } from '@/components/Button/Button.props';
import { useSession } from 'next-auth/react';
import { useDebounce } from '@/hooks/useDebounce';

const LIMIT = 5;

const CommentInput: FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { data: session } = useSession();
  const validate = () => {
    return query?.length < LIMIT && query?.length;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.nativeEvent.preventDefault();
    setQuery(() => '');
  };
  const sendValue = useDebounce((text: string) => {
    console.log(text);
  }, 500);

  useEffect(() => {
    sendValue(query);
  });

  return (
    <form className={styles.comment_form} onSubmit={(e) => submit(e)}>
      <CommentAvatar user={session?.user ? session.user : null} />
      <div className={styles.input_container}>
        <div className={`${styles.input} ${validate() ? styles.invalid : ''}`}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label>Написать комментарий</label>
          <div className={styles.stripe} />
        </div>
        <div className={`${styles.caption} ${styles.danger}`}>
          {validate() ? `Минимум ${LIMIT} символов, вы ввели ${query.length}` : ''}
        </div>
      </div>
      <Button appearance={BtnA.red} disabled={!!(validate() || !query?.length)}>
        Отправить
      </Button>
    </form>
  );
};

export default CommentInput;
