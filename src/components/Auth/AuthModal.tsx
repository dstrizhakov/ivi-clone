import React, { FC, useEffect, useState } from 'react';
import styles from './AuthModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { P } from '../P/P';
import BarGraph from '@/components/BarGraph/BarGraph';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '../Button/Button';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { TbReload } from 'react-icons/tb';
import { SlSocialVkontakte, SlSocialGoogle } from 'react-icons/sl';
import { selectModal, setShowAuth } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import { BtnA } from '../Button/Button.props';
import Link from 'next/link';
import { useGoogleLoginQuery, useLoginMutation } from '@/services/auth.api';
import { useRouter } from 'next/router';
import { logout, selectAuth, setUser } from '@/store/reducers/auth.slice';
import { REGEX_EMAIL, REGEX_PASSWORD } from '@/constants/Constants';

const AuthModal: FC = (): JSX.Element => {
  const { t } = useTranslation();

  const router = useRouter();
  const [progress, setProgress] = useState<number>(5);
  const [step, setStep] = useState<number>(1);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const { showAuth } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowAuth(false));
    setStep(() => 1);
  };
  const { user } = useAppSelector(selectAuth);

  const { data: session } = useSession();
  const [loginFunc] = useLoginMutation();
  const { data: googleLogin } = useGoogleLoginQuery();

  const logoutFunc = () => {
    signOut().then(() => {
      dispatch(logout());
      router.push('/profile').then(() => {});
    });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step >= 1) {
      setStep((prev) => prev - 1);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    switch (step) {
      case 1:
        setProgress(5);
        break;
      case 2:
        setProgress(50);
        break;
      case 3:
        setProgress(75);

        loginFunc({ email: login, password })
          .unwrap()
          .then((res) => {
            setProgress(100);
            dispatch(setUser(res));
            close();
            setPassword(() => '');
            setLogin(() => '');
          })
          .catch((rejected) => console.error(rejected));
        break;
    }
  }, [step]);

  async function handleGoogleSingIn() {
    await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_URL}/profile` });
  }
  async function handleVkSingIn() {
    await signIn('vk', { callbackUrl: `${process.env.NEXT_PUBLIC_URL}/profile` });
  }

  async function handleAuth() {
    const credentials = { email: login, password };
    console.log('handleAuth', login, password);
    signIn('credentials', {
      ...credentials,
      // redirect: false,
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/profile`,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <FullScreenModal isOpen={showAuth} closeModal={close}>
      <div className={styles.chat}>
        <div className={styles.chat__header}>
          {step > 1 ? (
            <div className={styles.chat__welcome}>
              <h5 className={styles.chat__title}>{t('sections.hello')}</h5>
              {login && <P size="S">{login}</P>}
            </div>
          ) : (
            <div className={styles.chat__welcome}>
              <h5 className={styles.chat__title}>{t('buttons.login-signup')}</h5>
            </div>
          )}
          <div className={styles.chat__close}>
            <CgClose onClick={close} />
          </div>
          <div className={styles.chat__progress}>
            <BarGraph width={progress} />
          </div>
        </div>
        <div className={styles.chat__body}>
          {user ? (
            <div className={styles.chat__message}>
              <h1 onClick={() => logoutFunc()} title={'Нажмите, чтобы выйти из аккаунта'}>
                {t('sections.already-signed')}
              </h1>
            </div>
          ) : (
            <>
              {step >= 1 && (
                <div className={styles.chat__message}>
                  <h5>{t('buttons.login-signup-person')}</h5>
                  {step <= 1 && <P>{t('sections.use-service-any-device')}</P>}
                </div>
              )}
              {step < 2 ? (
                <div className={styles.input}>
                  <BiUser className={styles.input__icon} />
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className={!!login ? styles.input__active : ''}
                  />
                  <label>{t('buttons.email-or-phone')}</label>
                </div>
              ) : (
                <div className={styles.chat__row}>
                  <Button appearance={BtnA.circle} onClick={() => previousStep()}>
                    <BsPencil />
                  </Button>
                  <div className={styles.chat__answer}>
                    <h5>{login}</h5>
                  </div>
                </div>
              )}
              {step >= 2 && (
                <>
                  <div className={styles.chat__message}>
                    <h5>
                      {t('buttons.enter-password')} {t('buttons.to-login')}
                    </h5>
                  </div>
                  <div className={`${styles.input} ${styles.password}`}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={!!password ? styles.input__active : ''}
                    />
                    <label>{t('buttons.enter-password')}</label>
                    {!showPassword ? (
                      <AiOutlineEye
                        className={`${styles.input__show} ${
                          //todo: менять цвет при невалидных данных (!login.match(REGEX_EMAIL))
                          !!password && styles.input__showActive
                        }`}
                        onClick={toggleShowPassword}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className={`${styles.input__show} ${
                          !!password && styles.input__showActive
                        }`}
                        onClick={toggleShowPassword}
                      />
                    )}
                  </div>
                </>
              )}
              {step < 2 ? (
                <button
                  disabled={!login.match(REGEX_EMAIL)}
                  className={styles.button}
                  onClick={nextStep}
                >
                  {t('buttons.continue')}
                </button>
              ) : (
                <button
                  disabled={!password.match(REGEX_PASSWORD)}
                  className={styles.button}
                  onClick={nextStep}
                >
                  {t('buttons.login')}
                </button>
              )}
              {step < 2 ? (
                <>
                  <div className={styles.chat__oauth}>
                    <Link
                      href={'http://localhost:3001/auth/google/login'}
                      target={'_blank'}
                      className={styles.button}
                    >
                      <span>{t('buttons.login-with')} Google backend</span>
                      <SlSocialGoogle />
                    </Link>
                    <button className={styles.button} onClick={() => handleGoogleSingIn()}>
                      <span>{t('buttons.login-with')} Google nextauth</span>
                      <SlSocialGoogle />
                    </button>
                    <button className={styles.button} onClick={() => handleVkSingIn()}>
                      <span>{t('buttons.login-with')} VK</span>
                      <SlSocialVkontakte />
                    </button>
                  </div>
                  <div className={styles.chat__confidential}>
                    <p>{t('sections.click-continue-agree')}</p>
                    <p>
                      <span>{t('descriptions.with')} </span>
                      <Link
                        href="https://www.ivi.tv/info/confidential"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('sections.privacy-policy')}
                      </Link>
                    </p>
                    <p>
                      <span>{t('sections.and')} </span>
                      <Link
                        href="https://www.ivi.tv/info/agreement"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('sections.user-agreement')}
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                <div className={styles.chat__recover}>
                  <TbReload />
                  <h5>{t('buttons.reset-password')}</h5>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </FullScreenModal>
  );
};

export default AuthModal;
