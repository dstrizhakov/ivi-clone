import Image from 'next/image';
import { FC } from 'react';
import styles from './ProfileIcon.module.scss';

export interface ProfileIconProps {
  image?: string;
  name: string;
  isActive: boolean;
}

const ProfileIcon: FC<ProfileIconProps> = ({ image, name, isActive = false }) => {
  return (
    <div className={`${styles.profile__user} ${isActive && styles.active}`}>
      <div className={`${styles.profile__image}`}>
        {image ? (
          <Image className={styles.profile__image} src={image} alt="user" width={48} height={48} />
        ) : (
          <span className={styles.profile__add} />
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};

export default ProfileIcon;
