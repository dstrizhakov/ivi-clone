import React, { FC } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './ProfileButton.module.scss';
import { ICardButtons, iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const ProfileButton: FC<ICardButtons> = ({ type, icon, children, onClick }) => {
  const IconComponent = icon;
  switch (type) {
    case iCardEnum.square_icon:
      return (
        <Button className={styles.square__icon} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          <div>{children}</div>
        </Button>
      );
    case iCardEnum.rect_icon:
      return (
        <Button className={styles.rect__icon} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case iCardEnum.rect_icon_light:
      return (
        <Button className={styles.rect__icon__light} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case iCardEnum.rect_icon_purple:
      return (
        <Button className={styles.rect__icon__purple} onClick={() => onClick && onClick()}>
          <div>
            <IconComponent />
          </div>
          {children}
        </Button>
      );
    case iCardEnum.rect_text:
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
