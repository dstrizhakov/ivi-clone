import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { BiWallet } from 'react-icons/bi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const PurchasesButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/favorites'} target={'_blank'}>
      <ProfileButton type={iCardEnum.square_icon} icon={BiWallet}>
        {t('buttons.purchases')}
      </ProfileButton>
    </Link>
  );
};

export default PurchasesButton;
