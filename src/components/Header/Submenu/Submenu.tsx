import React, { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import styles from './Submenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export interface SubmenuProps {
  icon?: IconType;
  user?: string | null;
  title?: ReactNode;
  link?: string;
  outline?: boolean;
  children: ReactNode;
}

const Submenu: FC<SubmenuProps> = ({ icon, user, title, link, outline, children }): JSX.Element => {
  const IconComponent = icon || undefined;
  if (!user) {
    return (
      <div className={styles.submenu}>
        {icon &&
          IconComponent &&
          (link ? (
            <Link href={link}>
              <IconComponent
                className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
              />
            </Link>
          ) : (
            <IconComponent
              className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
            />
          ))}
        {link ? (
          <Link href={link} className={styles.submenu__button}>
            {title}
          </Link>
        ) : (
          <span className={styles.submenu__button}>{title}</span>
        )}
        <div className={styles.submenu__body}>
          <span className={styles.submenu__border}></span>
          <div className={styles.submenu__content}>{children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.submenu}>
        {link &&
          (link ? (
            <Link href={link}>
              <Image
                src={user}
                alt="user"
                width={48}
                height={48}
                className={styles.submenu__buttonUser}
              />
            </Link>
          ) : (
            <Image
              src={user}
              alt="user"
              width={48}
              height={48}
              className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
            />
          ))}
        <div className={styles.submenu__body}>
          <span className={styles.submenu__border}></span>
          <div className={styles.submenu__content}>{children}</div>
        </div>
      </div>
    );
  }
};
export default Submenu;
