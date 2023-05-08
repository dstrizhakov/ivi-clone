import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { FiSettings } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const SettingsButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/settings'} target={'_blank'}>
      <ProfileButton type={iCardEnum.square_icon} icon={FiSettings}>
        {t('buttons.settings')}
      </ProfileButton>
    </Link>
  );
};

export default SettingsButton;
