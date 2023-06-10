import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import children from '../../../../public/children.png';
import { useTranslation } from 'react-i18next';
import styles from './ProfileSelector.module.scss';
import { FiUser } from 'react-icons/fi';
import ProfileIcon from '@/components/Auth/SelectProfile/ProfileIcon/ProfileIcon';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';

const ProfileSelector = () => {
  const { user, photo } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>
        <Htag tag="h3">{t('sections.select-profile')}</Htag>
      </div>
      <div className={styles.profile__row}>
        <div className={styles.profile__user}>
          {user && photo ? (
            <ProfileIcon image={photo} name={''} isActive={true} />
          ) : (
            <div className={`${styles.profile__image} ${styles.no_image}`}>
              <FiUser />
            </div>
          )}
          <span>{user?.nickname || user?.name || user?.email || t('sections.profile')}</span>
        </div>
        <ProfileIcon image={children} name={t('sections.children')} isActive={false} />
        <ProfileIcon name={t('buttons.new-one')} isActive={false} />
      </div>
    </div>
  );
};

export default ProfileSelector;
