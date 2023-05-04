import React, { useState } from 'react';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import { Button } from '@/components/Button/Button';
import styles from './Comment.module.scss';

const CommentInput = () => {
  const [query, setQuery] = useState<string>('');
  const limit = 5;

  const validate = () => {
    return query?.length < limit && query?.length;
  };
  const submit = (e) => {
    e.nativeEvent.preventDefault();
    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={(e) => submit(e)}>
      <CommentAvatar />
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
      <Button appearance={'red'} disabled={!!(validate() || !query?.length)}>
        Отправить
      </Button>
    </form>
  );
};

export default CommentInput;