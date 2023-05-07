import type { StorybookConfig } from '@storybook/nextjs';

const previewAnnotations: { stories: string[]; framework: { name: string; options: {} }; docs: { autodocs: string }; addons: string[] } = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
    'storybook-addon-next-router'
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
