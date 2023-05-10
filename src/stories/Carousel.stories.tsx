import { Meta } from '@storybook/react';
import Carousel from '@/components/Carousel/Carousel';
import Card from '@/components/Card/Card';
import React from 'react';

const cards = [
  {
    id: 1,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    card_image:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 2,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    card_image:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 3,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    card_image:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 4,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    card_image:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 5,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    card_image:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
];

const CarouselWM = (args) => (
  <Carousel {...args}>
    {cards.slice(0, 7).map((card) => (
      <Card card={card} block key={card.id} />
    ))}
  </Carousel>
);

const meta: Meta<typeof Carousel> = {
  title: 'Main/Carousel',
  component: CarouselWM,
};

export default meta;

export const CarouselStory = {
  component: CarouselWM,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    title: 'title',
    route: '/',
    showAll: true,
  },
};
