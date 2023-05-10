import { cleanup, render } from '@testing-library/react';
import Card from '../../src/components/Card/Card';
import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from '@/store/reducers/modals.slice';
import { Provider } from 'react-redux';
import { persons } from '../../src/mock/persons';
import ShowAll from '../../src/components/Card/ShowAll';
import React from 'react';

const mockStore = configureStore({ reducer: { modalsReducer } });
const mockCard = {
  id: 1,
  name: 'Гарри Поттер и Дары Смерти: Часть I',
  enName: 'Harry Potter and the Deathly Hallows: Part I',
  description:
    'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
  enDescription:
    'The final "Potter" film about the magical world of J.K. Rowling and faithful friends Harry Potter, Ron Weasley, and Hermione Granger. The magical war continues.',
  trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  card_image:
    'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/234x360/?q=85',
  year: '2011',
  countries: 'США',
  rating: '9,5',
  genres: ['Фэнтези'],
  duration: '2ч 50мин',
  persons: persons,
};
// const emptyCard = {
//   id: 1,
//   name: '',
//   enName: '',
//   description: '',
//   enDescription: '',
//   trailer: '',
//   card_image: '',
//   year: '',
//   countries: '',
//   rating: '',
//   genres: [''],
//   duration: '',
//   persons: [],
// };

describe('card', () => {
  describe('params', () => {
    afterEach(() => cleanup());
    test('star', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} star />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    test('find', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} find />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    test('block', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} block />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    test('book', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} book />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    test('all', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} find star book block />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    test('no hover', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} hover={false} />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
  });
  describe('card object', () => {
    test('empty card ', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} hover={false} />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
  });
});

describe('show all card', () => {
  it('should match snapshot', () => {
    const card = render(<ShowAll />);
    expect(card).toMatchSnapshot();
  });
});
