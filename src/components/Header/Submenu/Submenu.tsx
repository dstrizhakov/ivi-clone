import React, { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import styles from './Submenu.module.scss';
import Link from 'next/link';

export interface SubmenuProps {
  icon?: IconType;
  title?: ReactNode;
  outline?: boolean;
  children: ReactNode;
  route?: string;
}

const Submenu: FC<SubmenuProps> = ({ icon, title, outline, route, children }) => {
  const IconComponent = icon || undefined;
  return (
    <div className={styles.submenu}>
      {icon &&
        IconComponent &&
        (route ? (
          <Link href={route}>
            <IconComponent
              className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
            />
          </Link>
        ) : (
          <IconComponent
            className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
          />
        ))}
      <span className={styles.submenu__button}>{title}</span>
      <div className={styles.submenu__body}>
        <span className={styles.submenu__border}></span>
        <div className={styles.submenu__content}>{children}</div>
      </div>
    </div>
  );
};
export default Submenu;
