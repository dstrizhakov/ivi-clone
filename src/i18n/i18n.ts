import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

i18next
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {});

export default i18next;
