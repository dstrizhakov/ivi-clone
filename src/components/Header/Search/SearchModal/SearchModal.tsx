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

const SearchModal: FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { t } = useTranslation();
  const { showSearch } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowSearch(false));
  };
  const { data: persons } = useFetchAllPersonsQuery();
  const [match, setMatch] = useState([]);
  const changeQuery = (e) => {
    setQuery(() => e.target.value);
  };
  useEffect(() => {
    if (query?.length) {
      setMatch(
        [...persons].filter((person) => {
          const regex = new RegExp(query, 'gi');
          return person?.name.match(regex);
        })
      );
    } else {
      setMatch(() => []);
    }
  }, [persons, query]);
  const clearQuery = (): void => {
    setQuery('');
  };
  const router = useRouter();
  const redirect = (id) => {
    router.push(`/person/${id}`);
    dispatch(setShowSearch(false));
  };
  usePreventScroll(showSearch);
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
        <div className={styles.result}>
          {match.slice(0, 10).map((person, index) => (
            <Button
              onClick={() => redirect(person.id)}
              appearance={BtnA.transparent}
              href={`person/${person.id}`}
              key={person.id}
            >
              <P>{index + 1}.</P>
              <P>{person.name}</P>
            </Button>
          ))}
        </div>
      </div>
    </FullScreenModal>
  );
};

export default SearchModal;
