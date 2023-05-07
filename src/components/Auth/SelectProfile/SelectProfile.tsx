import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Htag } from '@/components/Htag/Htag';
import children from '../../../../public/children.png';
import styles from './SelectProfile.module.scss';
import { FC } from 'react';
import { SelectProfileProps } from './SelectProfile.props';

const SelectProfile: FC<SelectProfileProps> = ({ tag = 'h3' }) => {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return null;
  }
  return (
    <div className={styles.content__profile}>
      <div className={styles.profile__title}>
        <Htag tag={tag}>Выбор профиля</Htag>
      </div>
      <div className={styles.profile__row}>
        <div className={`${styles.profile__user} ${styles.active}`}>
          {session.user && session.user?.image && (
            <Image
              className={styles.profile__image}
              src={session.user?.image}
              alt="user"
              width={48}
              height={48}
            />
          )}
          <span>{session.user?.email || session.user?.name}</span>
        </div>
        <div className={`${styles.profile__user}`}>
          <Image
            className={styles.profile__image}
            src={children}
            alt="children"
            width={40}
            height={40}
          />
          <span>Дети</span>
        </div>
        <div className={`${styles.profile__user}`}>
          <div className={styles.profile__addProfile}></div>
          {/* <Image
                    className={styles.profile__image}
                    src={children}
                    alt="children"
                    width={40}
                    height={40}
                  /> */}
          <span>Новый</span>
        </div>
      </div>
    </div>
  );
};

export default SelectProfile;
