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

const AuthModal: FC = (): JSX.Element => {
  const [progress, setProgress] = useState<number>(5);
  const [step, setStep] = useState<number>(1);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const { showAuth } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowAuth(false));
  };

  const { data: session, status } = useSession();

  console.log(status, session);

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
        setProgress(70);
        break;
      case 4:
        setProgress(100);
        break;
    }
  }, [step]);

  async function handleGoogleSingin() {
    await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_URL}/profile` });
  }
  async function handleVkSingin() {
    await signIn('vk', { callbackUrl: `${process.env.NEXT_PUBLIC_URL}/profile` });
  }

  return (
    <>
      <FullScreenModal isOpen={showAuth} closeModal={close}>
        <div className={styles.chat}>
          <div className={styles.chat__header}>
            {step > 1 ? (
              <div className={styles.chat__welcome}>
                <h5 className={styles.chat__title}>Здравствуйте</h5>
                {login && <P size="S">{login}</P>}
              </div>
            ) : (
              <div className={styles.chat__welcome}>
                <h5 className={styles.chat__title}>Вход или регистрация</h5>
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
            {session ? (
              <div className={styles.chat__message}>
                <h1 onClick={() => signOut()}>Вы уже авторизованы</h1>
              </div>
            ) : (
              <>
                {step >= 1 && (
                  <div className={styles.chat__message}>
                    <h5>Войдите или зарегистрируйтесь</h5>
                    {step <= 1 && <P>чтобы пользоваться сервисом на любом устройстве</P>}
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
                    <label>Через email или телефон</label>
                  </div>
                ) : (
                  <div className={styles.chat__row}>
                    <Button appearance="circle" onClick={() => previousStep()}>
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
                      <h5>Введите пароль чтобы войти</h5>
                    </div>
                    <div className={`${styles.input} ${styles.password}`}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={!!password ? styles.input__active : ''}
                      />
                      <label>Введите пароль</label>
                      {!showPassword ? (
                        <AiOutlineEye
                          className={`${styles.input__show} ${
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
                  <button disabled={!login} className={styles.button} onClick={nextStep}>
                    Продолжить
                  </button>
                ) : (
                  <button disabled={!login} className={styles.button} onClick={nextStep}>
                    Войти
                  </button>
                )}
                {step < 2 ? (
                  <>
                    <div className={styles.chat__oauth}>
                      <button className={styles.button} onClick={() => handleGoogleSingin()}>
                        <span>Войти через Google</span>
                        <SlSocialGoogle />
                      </button>
                      <button className={styles.button} onClick={() => handleVkSingin()}>
                        <span>Войти через Google</span>
                        <SlSocialVkontakte />
                      </button>
                    </div>
                    <div className={styles.chat__confidential}>
                      <p>Нажимая «Продолжить», я соглашаюсь</p>
                      <p>
                        <span>c </span>
                        <a
                          href="https://www.ivi.tv/info/confidential"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Политикой конфиденциальности
                        </a>
                      </p>
                      <p>
                        <span>и </span>
                        <a
                          href="https://www.ivi.tv/info/agreement"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Пользовательским соглашением
                        </a>
                      </p>
                    </div>
                  </>
                ) : (
                  <div className={styles.chat__recover}>
                    <TbReload />
                    <h5>Восстановить пароль</h5>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export default AuthModal;
