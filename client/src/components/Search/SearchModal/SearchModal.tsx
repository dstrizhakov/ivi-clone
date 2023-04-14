import React, { FC, useState } from 'react';
import styles from './SearchModal.module.scss';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';
import { SearchModalProps } from './SearchModal.props';

const SearchModal: FC<SearchModalProps> = ({ isOpen, closeSearch }) => {
  const [query, setQuery] = useState<string>();

  const clearQuery = (): void => {
    setQuery('');
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <span className={styles.cross} onClick={() => closeSearch()}></span>
          <div className={styles.body}>
            <h3>Поиск</h3>
            <div className={styles.input}>
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
              {!!query ? (
                <CgClose className={styles.input__icon} onClick={clearQuery} />
              ) : (
                <IoSearchOutline className={styles.input__icon} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
