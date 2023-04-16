import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './FooterLink.module.scss';
import { FooterLinkProps } from './FooterLink.props';

const FooterLink: FC<FooterLinkProps> = ({ title, href, icon, openModal }) => {
  const IconComponent = icon;
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(styles.link, router.pathname === href ? styles.link__active : '')}
      onClick={openModal}
    >
      <IconComponent className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default FooterLink;
