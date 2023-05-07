import React, { useState } from 'react';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import { Button } from '@/components/Button/Button';
import styles from './Comment.module.scss';
import { BtnA } from '@/components/Button/Button.props';
import { useSession } from 'next-auth/react';

const CommentInput = () => {
  const [query, setQuery] = useState<string>('');
  const limit = 5;
  const { data: session } = useSession();

  const validate = () => {
    return query?.length < limit && query?.length;
  };
  const submit = (e) => {
    e.nativeEvent.preventDefault();
    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={(e) => submit(e)}>
      <CommentAvatar user={session?.user || null} />
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
          {validate() ? `Минимум ${limit} символов, вы ввели ${query.length}` : ''}
        </div>
      </div>
      <Button appearance={BtnA.red} disabled={!!(validate() || !query?.length)}>
        Отправить
      </Button>
    </form>
  );
};

export default CommentInput;
