import '@/styles/global.scss';
import './stories.scss';
import { AppRouterContext } from "next/dist/shared/lib/app-router-context";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { useEffect, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../src/i18n/i18n';

export const parameters = {
  i18n,
  locale: 'ru',
  locales: {
    ru: 'Russian',
    en: 'English',
  },
  nextRouter: {
    Provider: AppRouterContext.Provider,
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', right: 'ru', title: 'Русский' },
        { value: 'en', right: '🇺🇸', title: 'English' },
      ],
      showName: true,
    },
  },
};

i18n.on('languageChanged', (locale) => {
  document.dir = i18n.dir(locale);
});
const i18nextStoryDecorator = (Story, context) => {
  const { locale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    // here catches the suspense from components not yet ready (still loading translations)
    // alternative set useSuspense false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const reduxStoryDecorator = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

export default preview;
export const decorators = [
  reduxStoryDecorator,
  i18nextStoryDecorator
]
