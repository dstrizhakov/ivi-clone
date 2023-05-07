import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import Image from 'next/image';
import children from '../../../../public/children.png';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import styles from './ProfileSelector.module.scss';
import { FiUser } from 'react-icons/fi';

const ProfileSelector = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();

  return (
    <>
      {session && (
        <div className={styles.profile}>
          <div className={styles.profile__title}>
            <Htag tag="h3">{t('sections.select-profile')}</Htag>
          </div>
          <div className={styles.profile__row}>
            <div className={styles.profile__user}>
              {session.user && session.user?.image ? (
                <Image
                  className={styles.profile__image}
                  src={session.user.image}
                  alt="user"
                  width={48}
                  height={48}
                />
              ) : (
                <div className={`${styles.profile__image} ${styles.no_image}`}>
                  <FiUser />
                </div>
              )}
              <span>{session.user?.name || session.user?.email}</span>
            </div>
            <div className={`${styles.profile__user} ${styles.profile__item}`}>
              <Image
                className={styles.profile__image}
                src={children}
                alt="children"
                width={40}
                height={40}
              />
              <span>{t('sections.children')}</span>
            </div>
            <div className={`${styles.profile__user} ${styles.profile__item}`}>
              <div className={styles.profile__addProfile} />
              <span>{t('buttons.new-one')}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSelector;
