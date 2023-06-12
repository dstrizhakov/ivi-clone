import Card from '@/components/Card/Card';
import RatingModal from '@/components/Modals/RatingModal/RatingModal';
import { Meta } from '@storybook/react';

const card = {
  id: 1,
  name: 'Гарри Поттер и Дары Смерти: Часть I',
  enName: 'Harry Potter and the Deathly Hallows: Part I',
  description: '',
  enDescription: '',
  trailer: '',
  card_image: 'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
  year: '2011',
  countries: 'США',
  rating: '9,5',
  genres: ['Фэнтези'],
  duration: '2ч 50мин',
  persons: [],
};

const CardWM = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Card card={card} {...args} />
    <RatingModal />
  </div>
);

const meta: Meta<typeof Card> = {
  title: 'Main/Card',
  component: CardWM,
};

export default meta;

export const Hover = {
  title: 'Main/Card',
  component: CardWM,
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

export const LoadingCard = {
  title: 'Main/Card',
  component: CardWM,
  args: {
    card: null,
    hover: false,
  },
};

export const NoHover = {
  args: {
    card: card,
    hover: false,
  },
};
