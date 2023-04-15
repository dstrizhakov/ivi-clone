import React, { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import styles from './Submenu.module.scss';

export interface SubmenuProps {
  icon?: IconType;
  title?: ReactNode;
  outline?: boolean;
  children: ReactNode;
}

const Submenu: FC<SubmenuProps> = ({ icon, title, outline, children }) => {
  const IconComponent = icon ? icon : undefined;
  return (
    <div className={styles.submenu}>
      {icon && IconComponent && (
        <IconComponent
          className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
        />
      )}
      <span className={styles.submenu__button}>{title}</span>
      <div className={styles.submenu__body}>
        <span className={styles.submenu__border}></span>
        <div className={styles.submenu__content}>{children}</div>
      </div>
    </div>
  );
};

export default Submenu;
