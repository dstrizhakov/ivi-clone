import React, { FC, ReactNode } from 'react';
import { Button } from '@/components/Button/Button';
import { IconType } from 'react-icons';
import styles from './ProfileButton.module.scss';

interface ICardButtons {
  icon?: IconType;
  children?: ReactNode;
  type: string;
  onClick?: () => void;
}

const ProfileButton: FC<ICardButtons> = ({ type, icon, onClick, children }) => {
  const IconComponent = icon || undefined;
  switch (type) {
    case 'square_icon':
      return (
        <Button className={styles.square__icon} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          <div>{children}</div>
        </Button>
      );
    case 'rect_icon':
      return (
        <Button className={styles.rect__icon} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case 'rect_icon_light':
      return (
        <Button className={styles.rect__icon__light} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case 'rect_text':
      return (
        <Button className={styles.rect__text} onClick={() => onClick && onClick()}>
          {children}
        </Button>
      );
    default:
      return <></>;
  }
};

export default ProfileButton;
