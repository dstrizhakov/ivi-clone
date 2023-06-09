import React, { FC, useState } from 'react';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import { Button } from '@/components/Button/Button';
import styles from './Comment.module.scss';
import { BtnA } from '@/components/Button/Button.props';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

const LIMIT = 5;

const CommentInput: FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState<string>('');
  const { data: session } = useSession();
  const validate = () => {
    return query?.length < LIMIT && query?.length;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
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
