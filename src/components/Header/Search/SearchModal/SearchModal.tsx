import React, { FC, useState } from 'react';
import styles from './SearchModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';
import { SearchModalProps } from './SearchModal.props';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const SearchModal: FC<SearchModalProps> = ({ isOpen, closeSearch }): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { t } = useTranslation();

  const clearQuery = (): void => {
    setQuery('');
  };

  return (
    <>
      <FullScreenModal isOpen={isOpen} closeModal={closeSearch}>
        <div className={styles.body}>
          <h3>{t('sections.search')}</h3>
          <div className={styles.input}>
            <input
              className={!!query ? styles.input__active : ''}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
        </div>
      </FullScreenModal>
    </>
  );
};

export default SearchModal;
