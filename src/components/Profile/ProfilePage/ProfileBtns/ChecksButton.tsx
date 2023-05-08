import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { BsReceipt } from 'react-icons/bs';

const ChecksButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'/profile'} target={'_blank'}>
      <ProfileButton type={iCardEnum.square_icon} icon={BsReceipt}>
        {t('buttons.checks')}
      </ProfileButton>
    </Link>
  );
};

export default ChecksButton;
