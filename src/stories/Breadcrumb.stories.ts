import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Main/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Three: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
      { name: 'Фильм', path: '/movie' },
    ],
  },
};

export const Two: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
    ],
  },
};

export const One: Story = {
  args: {
    breadcrumbs: [{ name: 'Мой Иви', path: '/' }],
  },
};
