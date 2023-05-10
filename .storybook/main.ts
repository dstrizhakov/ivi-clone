import type { StorybookConfig } from '@storybook/nextjs';

const previewAnnotations: StorybookConfig  = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
    'storybook-addon-next-router',
    // 'addon-redux',
    '@tomfreudenberg/next-auth-mock/storybook'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default previewAnnotations;
