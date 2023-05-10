import i18n from './i18next.ts';
import '@/styles/global.scss';
import './stories.scss';
import { AppRouterContext } from "next/dist/shared/lib/app-router-context";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import React from 'react';

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

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
]

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


export default preview;
