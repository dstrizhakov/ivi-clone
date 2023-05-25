import React from 'react';
import styles from '@/components/Profile/ProfilePage/ProfilePage.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { BtnA, BtnS } from '@/components/Button/Button.props';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';

const EditProfile = () => {
  const { t } = useTranslation();
  const { user } = useAppSelector(selectAuth);

  const finalName = () => {
    if (user?.name) {
      if (user?.surname) {
        return `${user.name} ${user.surname}`;
      } else {
        return user.name;
      }
    } else if (user?.nickname) {
      return user.nickname;
    } else {
      return t('sections.profile');
    }
  };

  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo__title}>
        <div className={styles.title__text}>
          <Htag tag={'h2'}>{finalName()}</Htag>
          <P>{t('sections.main-profile')}</P>
        </div>
        <Link href={'/profile'}>
          <Button title={t('buttons.edit-profile') || 'Редактировать профиль'}>
            <HiOutlinePencil />
            {t('buttons.edit-profile')}
          </Button>
        </Link>
      </div>
      <div className={styles.userinfo__information}>
        <div className={styles.info}>
          <BsEnvelope />
          {user?.email ? (
            <P size={'S'}>{user?.email}</P>
          ) : (
            <Button
              appearance={BtnA.transparent}
              size={BtnS.S}
              title={t('buttons.add-email') || ''}
            >
              {t('buttons.add-email')}
            </Button>
          )}
        </div>
        <div className={styles.info}>
          <BsPhone />
          <Button appearance={BtnA.transparent} size={BtnS.S} title={t('buttons.add-phone') || ''}>
            {t('buttons.add-phone')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
