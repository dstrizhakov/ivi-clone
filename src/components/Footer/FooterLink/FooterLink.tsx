import { FC } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './FooterLink.module.scss';
import { FooterLinkProps } from './FooterLink.props';

const FooterLink: FC<FooterLinkProps> = ({ title, href, icon, openModal, isOpen }): JSX.Element => {
  const IconComponent = icon;
  const router = useRouter();
  return (
    <div
      className={cn(styles.link, router.pathname === href || isOpen ? styles.link__active : '')}
      onClick={openModal}
    >
      <IconComponent className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default FooterLink;
