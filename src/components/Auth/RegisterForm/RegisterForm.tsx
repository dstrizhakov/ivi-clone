import React, { useState } from 'react';
import InputFileButton from '@/components/InputFileButton/InputFileButton';
import { Button } from '@/components/Button/Button';
import { useRegisterMutation } from '@/services/auth.api';
import { setUser } from '@/store/reducers/auth.slice';
import { useAppDispatch } from '@/hooks/redux';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>();
  const [register] = useRegisterMutation();

  const clearInputs = () => {
    setUsername(() => '');
    setLogin(() => '');
    setPassword(() => '');
    setProfilePicture(() => null);
  };

  const registerHandler = () => {
    const formData = new FormData();
    formData.append('email', login);
    formData.append('password', password);
    formData.append('nickname', username);
    profilePicture && formData.append('photo', profilePicture);
    register(formData)
      .unwrap()
      .then((response) => {
        dispatch(setUser(response));
        clearInputs();
      })
      .catch((rejected) => console.error(rejected));
  };
  return (
    <div className={styles.register}>
      <input
        type="text"
        placeholder={'Имя пользователя'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder={'Электронная почта'}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder={'Пароль'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputFileButton setSelected={setProfilePicture} />
      <Button onClick={registerHandler}>Регистрация</Button>
    </div>
  );
};

export default RegisterForm;
