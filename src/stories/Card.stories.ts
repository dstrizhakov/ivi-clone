import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/Card/Card';
import { CardProps } from '@/components/Card/Card.props';
import { persons } from '@/mock/persons';

const meta: Meta<CardProps> = {
  title: 'Main/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<CardProps>;

const card = {
  id: 1,
  name: 'Гарри Поттер и Дары Смерти: Часть I',
  enName: 'Harry Potter and the Deathly Hallows: Part I',
  description:
    'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
  enDescription:
    'The final "Potter" film about the magical world of J.K. Rowling and faithful friends Harry Potter, Ron Weasley, and Hermione Granger. The magical war continues.',
  trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  card_image: 'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
  year: '2011',
  countries: 'США',
  rating: '9,5',
  genres: ['Фэнтези'],
  duration: '2ч 50мин',
  persons: persons,
};

export const Hover: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    card: card,
    hover: true,
    star: true,
    book: true,
    find: true,
    block: true,
  },
};

export const NoHover: Story = {
  args: {
    card: card,
    hover: false,
  },
};
