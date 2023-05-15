import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import children from '../../../../public/children.png';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import styles from './ProfileSelector.module.scss';
import { FiUser } from 'react-icons/fi';
import ProfileIcon from '@/components/Auth/SelectProfile/ProfileIcon/ProfileIcon';

const ProfileSelector = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();

  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>
        <Htag tag="h3">{t('sections.select-profile')}</Htag>
      </div>
      <div className={styles.profile__row}>
        <div className={styles.profile__user}>
          {session?.user && session?.user?.image ? (
            <ProfileIcon image={session.user.image} name={''} isActive={true} />
          ) : (
            <div className={`${styles.profile__image} ${styles.no_image}`}>
              <FiUser />
            </div>
          )}
          <span>{session?.user?.name || session?.user?.email || t('sections.profile')}</span>
        </div>
        <ProfileIcon image={children} name={t('sections.children')} isActive={false} />
        <ProfileIcon name={t('buttons.new-one')} isActive={false} />
      </div>
    </div>
  );
};

export default ProfileSelector;
