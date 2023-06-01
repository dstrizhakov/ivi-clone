import React, { FC, ReactNode } from 'react';
import styles from '@/components/Filters/Dropdown/Dropdown.module.scss';

interface iDrop {
  state: boolean;
  children: ReactNode;
}

const Dropdown: FC<iDrop> = ({ state, children }): JSX.Element => {
  return <div className={styles.dropdown_out}>{state && children}</div>;
};

export default Dropdown;
