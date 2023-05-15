import React, { FC } from 'react';
import styles from '@/components/Filters/Dropdown/Dropdown.module.scss';

const Dropdown: FC = ({ state, children }): JSX.Element => {
  return <div className={styles.dropdown_out}>{state && children}</div>;
};

export default Dropdown;
