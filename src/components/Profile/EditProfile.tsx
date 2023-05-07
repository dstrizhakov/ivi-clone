import React from 'react';
import styles from '@/components/Profile/MainBtns/MainBtns.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { BtnA, BtnS } from '@/components/Button/Button.props';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';

const EditProfile = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo__title}>
        <div className={styles.title__text}>
          <Htag tag={'h2'}>{t('sections.profile')}</Htag>
          <P>{t('sections.main-profile')}</P>
        </div>
        <Link href={'/profile'}>
          <Button>
            <HiOutlinePencil />
            {t('buttons.edit-profile')}
          </Button>
        </Link>
      </div>
      <div className={styles.userinfo__information}>
        <div className={styles.info}>
          <BsEnvelope />
          {session && session.user?.email ? (
            <P size={'S'}>{session.user?.email}</P>
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
