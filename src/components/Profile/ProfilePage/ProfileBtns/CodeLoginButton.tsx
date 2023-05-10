import React from 'react';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const CodeLoginButton = () => {
  const { t } = useTranslation();

  return (
    <ProfileButton
      type={iCardEnum.square_icon}
      icon={AiOutlinePlaySquare}
      onClick={() => console.log('modal open')}
    >
      {t('buttons.code-login')}
    </ProfileButton>
  );
};

export default CodeLoginButton;
