import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { AiFillCreditCard } from 'react-icons/ai';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const PaymentButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/purchases'} target={'_blank'}>
      <ProfileButton type={iCardEnum.square_icon} icon={AiFillCreditCard}>
        {t('buttons.payment')}
      </ProfileButton>
    </Link>
  );
};

export default PaymentButton;
