import React from 'react';
import styles from '@/components/Filters/Dropdown/Dropdown.module.scss';

const Dropdown = ({ state, children }) => {
  return (
    <>
      <div className={styles.dropdown_out}>{state && children}</div>
    </>
  );
};

export default Dropdown;
