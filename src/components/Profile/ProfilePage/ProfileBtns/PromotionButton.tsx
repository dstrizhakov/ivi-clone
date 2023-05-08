import React, { FC } from 'react';
import Link from 'next/link';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { useTranslation } from 'react-i18next';
import { BsLightningChargeFill } from 'react-icons/bs';
import { iPB } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const PromotionButton: FC<iPB> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2F'}>
      <ProfileButton type={type} icon={BsLightningChargeFill}>
        {t('buttons.promotion-30-days')} &#8381;
      </ProfileButton>
    </Link>
  );
};

export default PromotionButton;
