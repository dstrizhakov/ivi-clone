import React from 'react';
import { Button } from '@/components/Button/Button';
import { useAddOneFilmMutation } from '@/services/movie.api';
import { persons } from '@/mock/persons';
import { IMovieOld } from '@/types/types';
import { useCreateCommentsMutation } from '@/services/comments.api';
const movie: IMovieOld = {
  id: 1,
  title: 'Гарри Поттер и Дары Смерти: Часть I',
  originalTitle: 'Harry Potter and the Deathly Hallows: Part I',
  slogan:
    'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
  originalSlogan:
    'The final "Potter" film about the magical world of J.K. Rowling and faithful friends Harry Potter, Ron Weasley, and Hermione Granger. The magical war continues.',
  trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  card_image:
    'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/234x360/?q=85',
  year: '2011',
  countries: ['США'],
  rating: '9,5',
  genres: ['Фэнтези'],
  duration: '2ч 50мин',
  persons: persons,
};

const AddNewMovie = () => {
  const [addNewMovie] = useAddOneFilmMutation();
  const [createComment] = useCreateCommentsMutation();

  const create = () => {
    try {
      movie.id = self.crypto.randomUUID();
      addNewMovie(movie);
      createComment({ id: movie.id, commentsData: [] });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Button onClick={create}>add</Button>
    </div>
  );
};

export default AddNewMovie;
