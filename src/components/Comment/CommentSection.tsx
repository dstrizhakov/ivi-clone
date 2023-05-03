import React from 'react';
import CommentInput from '@/components/Comment/CommentInput';
import Comment from '@/components/Comment/Comment';
import styles from './Comment.module.scss';
const comments = [
  {
    id: 1,
    user: {
      name: 'auser1',
    },
    date: '5 марта 2014',
    clause: 'comment1!',
    children: [
      {
        id: 'c1',
        user: {
          name: 'inner1',
        },
        date: '12 апреля 2023',
        clause: 'comment2!',
        children: [
          {
            id: 'cc1',
            user: {
              name: 'innerinner1',
            },
            date: '13 июня 2016',
            clause:
              'comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!comment3!',
          },
        ],
      },
      {
        id: 'c2',
        user: {
          name: 'inner2',
        },
        date: '5 марта 2014',
        clause: 'comment4!',
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'buser2',
    },
    date: '5 марта 2014',
    clause: 'comment2!',
  },
  {
    id: 3,
    user: {
      name: 'cuser3',
    },
    date: '5 марта 2014',
    clause: 'comment3!',
  },
  {
    id: 4,
    user: {
      name: 'duser4',
    },
    date: '5 марта 2014',
    clause: 'comment4!',
  },
  {
    id: 5,
    date: '5 марта 2014',
    clause: 'comment4!',
  },
];

const CommentSection = () => {
  return (
    <div className={styles.comment_section}>
      <CommentInput />
      <ul>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
