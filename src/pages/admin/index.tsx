import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';
import { Htag } from '@/components/Htag/Htag';
import {
  useAddOneMovieMutation,
  useDeleteOneMovieMutation,
  useFetchAllMoviesQuery,
} from '@/services/movie.api';
import Card from '@/components/Card/Card';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';
import { BsTrash } from 'react-icons/bs';
import { persons } from '@/mock/persons';
import { useSearchParamsState } from '@/hooks/useSearchParamsState';
import { IMovieOld } from '@/types/types';
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

const Admin = () => {
  const { user } = useAppSelector(selectAuth);
  const { t } = useTranslation();
  const [page, setPage] = useSearchParamsState<number>({ name: 'page' });
  const [addNewMovie] = useAddOneMovieMutation();
  const [deleteMovie] = useDeleteOneMovieMutation();
  const {
    data: movies,
    error,
    isLoading,
  } = useFetchAllMoviesQuery({
    limit: 10,
    page: page,
  });
  if (!user) return <NotFoundPage />; //todo: fix when slice is ready

  const del = (id: number) => {
    try {
      deleteMovie(id);
    } catch (e) {
      console.log(e);
    }
  };
  const create = () => {
    try {
      movie.id = self.crypto.randomUUID();
      addNewMovie(movie);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>{t('title.admin')}</title>
      </Head>
      <div>
        <Htag tag={'h3'}>{t('descriptions.admin')}</Htag>
        <Button onClick={create}>add</Button>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {!error &&
            !isLoading &&
            movies.map((m) => (
              <div
                key={m.id}
                style={{
                  margin: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card card={m} />
                <Button
                  appearance={BtnA.circle}
                  style={{ margin: '3px' }}
                  onClick={() => del(m.id)}
                >
                  <BsTrash />
                </Button>
              </div>
            ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {[...Array(5)].map((i, index) => (
            <Button style={{ margin: '10px' }} key={index} onClick={() => setPage(() => index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
