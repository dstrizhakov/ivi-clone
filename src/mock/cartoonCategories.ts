import { ILink } from '@/types/types';

const genres: ILink[] = [
  { title: 'Артхаус', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Биография', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Боевики', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Вестерн', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Военные', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Детективы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Для всей семьи', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Для детей', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Документальные', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Драмы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Исторические', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Катастрофы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Комедии', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Криминал', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Мелодрамы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Мистические', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Приключения', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Спорт', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Триллеры', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Ужасы', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фантастика', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фэнтези', link: 'https://www.ivi.tv/movies/arthouse' },
];
const countries: ILink[] = [
  { title: 'Русские', link: 'https://www.ivi.tv/series/ru' },
  { title: 'Зарубежные', link: 'https://www.ivi.tv/series/foreign' },
  { title: 'Американские', link: 'https://www.ivi.tv/series/us' },
  { title: 'Турецкие', link: 'https://www.ivi.tv/series/tr' },
];
const years: ILink[] = [
  { title: 'Мультики 2023 года', link: 'https://www.ivi.tv/series/2023' },
  { title: 'Мультики 2022 года', link: 'https://www.ivi.tv/series/2022' },
  { title: 'Мультики 2021 года', link: 'https://www.ivi.tv/series/2021' },
  { title: 'Мультики 2020 года', link: 'https://www.ivi.tv/series/2020' },
];
const collections: ILink[] = [
  { title: 'Новинки', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Подборки', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Иви.Рейтинг', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Трейлеры', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Что посмотреть', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фильмы в HD', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Новинки подписки', link: 'https://www.ivi.tv/movies/arthouse' },
];

export const cartoonCategories = {
  genres,
  countries,
  years,
  collections,
};
