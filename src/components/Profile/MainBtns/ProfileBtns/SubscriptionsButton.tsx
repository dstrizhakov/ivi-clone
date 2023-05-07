import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const SubscriptionsButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'https://www.ivi.ru/profile/subscriptions'}>
      <ProfileButton type={iCardEnum.rect_text}>
        <>
          <div>{t('buttons.subscriptions')}</div>
          <div>{t('buttons.subscribe')}</div>
        </>
      </ProfileButton>
    </Link>
  );
};

export default SubscriptionsButton;
