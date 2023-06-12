import React, { FC, useEffect, useState } from 'react';
import styles from './SearchModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { selectModal, setShowSearch } from '@/store/reducers/modals.slice';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import { Button } from '@/components/Button/Button';
import { BtnA } from '@/components/Button/Button.props';
import { useRouter } from 'next/navigation';
import { P } from '@/components/P/P';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import { BsPersonCircle } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';

const SearchModal: FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { t } = useTranslation();
  const { showSearch } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowSearch(false));
  };
  const { data: persons } = useFetchAllPersonsQuery();
  const { data: movies } = useFetchAllFilmsQuery({ limit: 100 });

  const [personMatch, setPersonMatch] = useState([]);
  const [movieMatch, setMovieMatch] = useState([]);
  const changeQuery = (e) => {
    setQuery(() => e.target.value);
  };
  useEffect(() => {
    if (query?.length) {
      setPersonMatch(() =>
        persons?.filter((item) => {
          const regex = new RegExp(query, 'gi');
          const name = item?.name || item?.enName || item?.fullName || item?.fullNameEn;
          return name?.match(regex);
        })
      );
      setMovieMatch(() =>
        movies?.filter((item) => {
          const regex = new RegExp(query, 'gi');
          const name = item?.name || item?.enName || item?.originalTitle || item?.title;
          return name?.match(regex);
        })
      );
    } else {
      setMovieMatch(() => []);
      setPersonMatch(() => []);
    }
  }, [movies, persons, query]);
  const clearQuery = (): void => {
    setQuery('');
  };
  const router = useRouter();
  const redirect = (item) => {
    if (item?.id) {
      item?.trailer ? router.push(`/watch/${item.id}`) : router.push(`/person/${item.id}`);
    } else {
      router.push(item);
    }
    setTimeout(() => {
      close();
      clearQuery();
    }, 300);
  };
  usePreventScroll(showSearch);
  const presets = ['Премьеры фильмов', 'Новинки подписки', 'Сериалы Amediateka', 'Высокий рейтинг'];
  return (
    <FullScreenModal isOpen={showSearch} closeModal={() => close()}>
      <div className={styles.body}>
        <h3>{t('sections.search')}</h3>
        <div className={styles.input}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={(e) => changeQuery(e)}
          />
          <label>
            {i18next.language == 'ru' ? 'Фильмы, персоны, жанры' : 'Movies, persons, genres'}
          </label>
          {!!query ? (
            <CgClose className={styles.input__icon} onClick={clearQuery} />
          ) : (
            <IoSearchOutline className={styles.input__icon} />
          )}
        </div>

        {!movieMatch?.length && !personMatch?.length ? (
          <div className={styles.presets}>
            {presets.map((preset, index) => (
              <div className={styles.preset} key={index}>
                <div className={styles.preset_inner}>
                  <a className={styles.link} onClick={() => redirect('/movies')}>
                    {preset}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.result}>
            {movieMatch?.length
              ? movieMatch.slice(0, 15).map((movie) => (
                  <Button
                    onClick={() => redirect(movie)}
                    appearance={BtnA.transparent}
                    key={movie.id}
                  >
                    <BiMoviePlay />
                    <P>{movie.name || movie.title}</P>
                  </Button>
                ))
              : ''}
            {personMatch?.length
              ? personMatch.slice(0, 15).map((person) => (
                  <Button
                    onClick={() => redirect(person)}
                    appearance={BtnA.transparent}
                    key={person.id}
                  >
                    <BsPersonCircle />
                    <P>{person.name}</P>
                  </Button>
                ))
              : ''}
          </div>
        )}
      </div>
    </FullScreenModal>
  );
};

export default SearchModal;
