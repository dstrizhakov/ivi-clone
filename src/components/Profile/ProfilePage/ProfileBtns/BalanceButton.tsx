import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const BalanceButton = () => {
  const { t } = useTranslation();
  return (
    <ProfileButton type={iCardEnum.rect_text}>
      <>
        <div>{t('buttons.balance')}</div>
        <div>0 &#8381;</div>
      </>
    </ProfileButton>
  );
};

export default BalanceButton;
