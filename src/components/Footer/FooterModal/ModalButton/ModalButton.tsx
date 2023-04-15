import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './ModalButton.module.scss';
import { ModalButtonProps } from './ModalButton.props';
import { FC } from 'react';

const ModalButton: FC<ModalButtonProps> = ({ children, title, openModal, isOpen }) => {
  return (
    <div onClick={openModal} className={cn(styles.link, isOpen ? styles.link__active : '')}>
      {children}
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default ModalButton;
