import React from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { FiUser } from 'react-icons/fi';

const colors = ['#313131', '#c74d1f', '#d0af23', '#212bb6', '#0bae0b'];

const CommentAvatar = ({ user }) => {
  return (
    <div className={styles.user_image}>
      <div
        className={styles.image_container}
        style={{
          backgroundColor: `${
            user?.name ? colors[Math.round(Math.random() * (colors.length - 1))] : colors[0]
          }`,
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
