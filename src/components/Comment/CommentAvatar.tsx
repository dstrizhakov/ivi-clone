import React from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { FiUser } from 'react-icons/fi';

const colors = [
  'https://gambit-parent.dfs.ivi.ru/static/23.05.01/images/avatarBg/varna.jpg',
  'https://gambit-parent.dfs.ivi.ru/static/23.05.01/images/avatarBg/hanoi.jpg',
  'https://gambit-parent.dfs.ivi.ru/static/23.05.01/images/avatarBg/beirut.jpg',
  'https://gambit-parent.dfs.ivi.ru/static/23.05.01/images/avatarBg/alexandria.jpg',
];

const CommentAvatar = ({ user }) => {
  return (
    <div className={styles.user_image}>
      <div
        className={styles.image_container}
        style={{
          backgroundImage: `${
            user?.name
              ? `url(${colors[Math.round(Math.random() * (colors.length - 1))]}`
              : `url(${colors[0]}`
          })`,
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
