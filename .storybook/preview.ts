import type { Preview } from '@storybook/react';
import i18n from './i18next.ts';
import '@/styles/global.scss';
import './stories.scss';
import { RouterContext } from "next/dist/shared/lib/router-context";

const preview: Preview = {
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

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    ru: 'Russian',
    en: 'English',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};


export default preview;
