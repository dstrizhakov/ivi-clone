import { IMovie } from '@/types/types';
import { persons } from './persons';

export const movies: IMovie[] = [
  {
    id: 1,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Гарри Поттер и Дары Смерти: Часть I',
    descr:
      'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война. Т',
    trailer:
      'https://thumbs.dfs.ivi.ru/storage28/contents/7/b/2918e4eddc1071a55b08129f6efef5.jpg/858x483/?q=85',
    year: '2011',
    countrys: 'США',
    rating: '9,0',
    genres: ['Фэнтези', 'Приключения', 'Семейные'],
    duration: '2ч 50мин',
    persons: persons,
  },
  {
    id: 2,
    name: 'Гарри Поттер и Дары Смерти: Часть II',
    enName: 'Гарри Поттер и Дары Смерти: Часть II',
    descr:
      'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
    trailer:
      'https://thumbs.dfs.ivi.ru/storage28/contents/7/b/2918e4eddc1071a55b08129f6efef5.jpg/858x483/?q=85',
    year: '2011',
    countrys: 'США',
    rating: '9,0',
    genres: ['Фэнтези', 'Приключения', 'Семейные'],
    duration: '2ч 50мин',
    persons: persons,
  },
  {
    id: 3,
    name: 'Гарри Поттер и Принц-полукровка',
    enName: 'Гарри Поттер и Принц-полукровка',
    descr:
      'Гарри Поттер и принц-полукровка» – шестая лента о приключениях Гарри, Рона и Гермионы в волшебном мире Хогвартса. Темный Лорд вернулся.  ',
    trailer:
      'https://thumbs.dfs.ivi.ru/storage28/contents/7/b/2918e4eddc1071a55b08129f6efef5.jpg/858x483/?q=85',
    year: '2011',
    countrys: 'США',
    rating: '9,0',
    genres: ['Фэнтези', 'Приключения', 'Семейные'],
    duration: '2ч 50мин',
    persons: persons,
  },
];
