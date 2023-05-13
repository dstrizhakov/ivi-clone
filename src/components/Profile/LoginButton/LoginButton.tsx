import React from 'react';
import styles from './LoginButton.module.scss';
import { Button } from '@/components/Button/Button';
import { BtnA, BtnS } from '@/components/Button/Button.props';
import { TiUserOutline } from 'react-icons/ti';
import { useAppDispatch } from '@/hooks/redux';
import { setShowAuth } from '@/store/reducers/modals.slice';
import { useTranslation } from 'react-i18next';

const LoginButton = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const openLoginModal = () => {
    dispatch(setShowAuth(true));
  };
  return (
    <div className={styles.login} data-testid={'login-button'}>
      <Button
        onClick={() => openLoginModal()}
        size={BtnS.S}
        appearance={BtnA.red}
        title={t('buttons.login-signup') || 'Войти или зарегистрироваться'}
      >
        <TiUserOutline />
        {t('buttons.login-signup')}
      </Button>
    </div>
  );
};

export default LoginButton;
