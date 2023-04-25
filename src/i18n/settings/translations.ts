import enTitle from '../en/title.json';
import enHeader from '../en/header.json';
import enFooter from '../en/footer.json';
import enSections from '../en/sections.json';
import enDescriptions from '../en/descriptions.json';
import enButtons from '../en/buttons.json';
import enCarousels from '../en/carousels.json';

import ruTitle from '../ru/title.json';
import ruHeader from '../ru/header.json';
import ruFooter from '../ru/footer.json';
import ruSections from '../ru/sections.json';
import ruDescriptions from '../ru/descriptions.json';
import ruButtons from '../ru/buttons.json';
import ruCarousels from '../ru/carousels.json';

const translations = {
  en: {
    translation: {
      title: enTitle,
      header: enHeader,
      footer: enFooter,
      sections: enSections,
      buttons: enButtons,
      descriptions: enDescriptions,
      carousels: enCarousels,
    },
  },
  ru: {
    translation: {
      title: ruTitle,
      buttons: ruButtons,
      header: ruHeader,
      footer: ruFooter,
      sections: ruSections,
      descriptions: ruDescriptions,
      carousels: ruCarousels,
    },
  },
};

export default translations;
