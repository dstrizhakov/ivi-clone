import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './FooterLink.module.scss';
import { FooterLinkProps } from './FooterLink.props';
import { FC } from 'react';

const FooterLink: FC<FooterLinkProps> = ({ children, title, href }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={cn(styles.link, router.pathname === href ? styles.link__active : '')}
    >
      {children}
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default FooterLink;
