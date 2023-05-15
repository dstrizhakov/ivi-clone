import type { Meta, StoryObj } from '@storybook/react';

import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';

const meta: Meta<typeof MovieBreadcrumbs> = {
  title: 'Main/Breadcrumbs',
  component: MovieBreadcrumbs,
};

export default meta;
type Story = StoryObj<typeof MovieBreadcrumbs>;

export const ThreeM: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
      { name: 'Фильм', path: '/movie' },
    ],
  },
};

export const TwoM: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
    ],
  },
};

export const OneM: Story = {
  args: {
    breadcrumbs: [{ name: 'Мой Иви', path: '/' }],
  },
};
