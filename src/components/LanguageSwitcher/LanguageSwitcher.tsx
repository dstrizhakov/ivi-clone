import React, { useEffect } from 'react';
import i18next from 'i18next';
import styles from './LanguageSwitcher.module.scss';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';

const LanguageSwitcher = () => {
  useEffect(() => {
    const language = localStorage.getItem('language') || 'ru';
    i18next.changeLanguage(language).then(() => {});
  }, []);
  const changeLanguage = async (e, language) => {
    e.preventDefault();
    await i18next.changeLanguage(language);
    localStorage.setItem('language', language);
  };
  return (
    <div className={styles.switcher_container}>
      <div className={styles.switcher}>
        <Button
          className={styles.switcher_item}
          appearance={i18next.language == 'ru' ? BtnA.red : BtnA.rectangle}
          onClick={(e) => changeLanguage(e, 'ru')}
        >
          Ru
        </Button>
        <Button
          className={styles.switcher_item}
          appearance={i18next.language == 'en' ? BtnA.red : BtnA.rectangle}
          onClick={(e) => changeLanguage(e, 'en')}
        >
          En
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
