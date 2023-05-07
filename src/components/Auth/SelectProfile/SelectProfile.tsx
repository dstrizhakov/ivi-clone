import { useSession } from 'next-auth/react';
import { Htag } from '@/components/Htag/Htag';
import children from '../../../../public/children.png';
import styles from './SelectProfile.module.scss';
import { FC } from 'react';
import { SelectProfileProps } from './SelectProfile.props';
import ProfileIcon from './ProfileIcon/ProfileIcon';

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
        {session.user && session.user?.image && (
          <ProfileIcon
            image={session.user?.image}
            name={session.user?.email || session.user?.name || 'user'}
            isActive={true}
          />
        )}
        <ProfileIcon image={children} name={'Дети'} isActive={false} />
        <ProfileIcon name={'Новый'} isActive={false} />
      </div>
    </div>
  );
};

export default SelectProfile;
