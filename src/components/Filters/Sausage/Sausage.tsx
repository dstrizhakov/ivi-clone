import React, { FC } from 'react';
import styles from './Sausage.module.scss';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { SausageProps } from '@/components/Filters/Sausage/Sausage.props';

const Sausage: FC<SausageProps> = ({ sausage, s, set }) => {
  const check = () => {
    set(
      (s = [
        ...s.filter((i) => i.id !== sausage.id),
        {
          id: sausage.id,
          title: sausage.title,
          checked: !sausage.checked,
        },
      ]).sort((a, b) => a.id - b.id)
    );
    sausage.checked = !sausage.checked;
  };
  return (
    <div
      className={`${styles.sausage} ${sausage.checked && styles.checked}`}
      onClick={() => check()}
    >
      <div className={styles.icon_plus}>
        <IoAddOutline />
      </div>
      <div className={styles.title}>{sausage.title}</div>
      <div className={styles.icon_delete}>
        <RxCross2 />
      </div>
    </div>
  );
};

export default Sausage;
