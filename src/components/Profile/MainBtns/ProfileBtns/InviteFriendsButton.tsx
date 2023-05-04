import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { TbVectorTriangle } from 'react-icons/tb';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';

const InviteFriendsButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'https://www.ivi.ru/profile/referral'} target={'_blank'}>
      <ProfileButton type={iCardEnum.rect_icon} icon={TbVectorTriangle}>
        {t('buttons.invite-friends')}
      </ProfileButton>
    </Link>
  );
};

export default InviteFriendsButton;
