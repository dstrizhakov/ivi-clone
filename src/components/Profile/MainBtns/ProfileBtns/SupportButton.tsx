import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { BiSupport } from 'react-icons/bi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const SupportButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://ask.ivi.ru/'} target={'_blank'}>
      <ProfileButton type={iCardEnum.square_icon} icon={BiSupport}>
        {t('buttons.support')}
      </ProfileButton>
    </Link>
  );
};

export default SupportButton;
