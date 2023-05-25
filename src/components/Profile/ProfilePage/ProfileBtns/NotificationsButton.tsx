import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { TbBellRinging } from 'react-icons/tb';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const NotificationsButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'/notifications'} target={'_blank'}>
      <ProfileButton type={iCardEnum.rect_icon} icon={TbBellRinging}>
        {t('buttons.notifications')}
      </ProfileButton>
    </Link>
  );
};

export default NotificationsButton;
