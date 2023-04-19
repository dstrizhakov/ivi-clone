import React, { FC, useState } from 'react';
import styles from './Sausage.module.scss';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const Sausage: FC = ({ sausage }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`${styles.sausage} ${checked && styles.checked}`}
      onClick={() => setChecked((c) => !c)}
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
