import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { GiPresent } from 'react-icons/gi';
import Link from 'next/link';
import { iPB } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const PresentSubscriptionButton: FC<iPB> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <Link href={'https://widget.mgc-loyalty.ru/iviru/landing'} target={'_blank'}>
      <ProfileButton type={type} icon={GiPresent}>
        {t('buttons.present-subscription')}
      </ProfileButton>
    </Link>
  );
};

export default PresentSubscriptionButton;
