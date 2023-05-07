import React from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { FiUser } from 'react-icons/fi';

const colors = [
  '#313131',
  '#c74d1f',
  '#d0af23',
  '#212bb6',
  '#0bae0b',
  '#ae0ba6',
  '#0baeae',
  '#af0a0a',
  '#5716b9',
  '#1dbe6d',
];

const CommentAvatar = ({ user }) => {
  const col = user?.userId ? String(user?.userId).split('').reverse()[0] : 0;
  return (
    <div className={styles.user_image}>
      <div
        className={styles.image_container}
        style={{
          backgroundColor: `${colors[col]}`,
        }}
      >
        <div className={styles.image_text}>
          {user && user.name ? user?.name[0].toUpperCase() : <FiUser />}
        </div>
      </div>
    </div>
  );
};

export default CommentAvatar;
