import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { RxCountdownTimer } from 'react-icons/rx';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const ViewedButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/cards'} target={'_blank'}>
      <ProfileButton type={iCardEnum.square_icon} icon={RxCountdownTimer}>
        {t('buttons.views')}
      </ProfileButton>
    </Link>
  );
};

export default ViewedButton;
