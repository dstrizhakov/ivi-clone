import React from 'react';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';
import { Htag } from '@/components/Htag/Htag';
import { useDeleteOneMovieMutation, useFetchAllMoviesQuery } from '@/services/movie.api';
import Card from '@/components/Card/Card';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';
import { BsTrash } from 'react-icons/bs';
import { useSearchParamsState } from '@/hooks/useSearchParamsState';
import AddNewMovie from '@/components/AdminPage/AddNewMovie';

const Admin = () => {
  const { user } = useAppSelector(selectAuth);
  const { t } = useTranslation();
  const [page, setPage] = useSearchParamsState<number>({ name: 'page' });
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
  //if (!user.roles.find(role => role.name === 'ADMIN')) return <NotFoundPage />;
  const del = (id: number) => {
    try {
      deleteMovie(id);
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
        <AddNewMovie />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {!error &&
            !isLoading &&
            movies.map((movie) => (
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
                <Card card={movie} />
                <Button
                  appearance={BtnA.circle}
                  style={{ margin: '3px' }}
                  onClick={() => del(movie.id)}
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
