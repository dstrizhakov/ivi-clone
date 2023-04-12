import React, { FC, useState } from 'react';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5';

const Search: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>();

  // const handleClick = (): void => {
  //   setIsOpen((prev) => !prev);
  // };
  const clearQuery = (): void => {
    setQuery('');
  };

  return (
    <>
      <div className={styles.search} onClick={() => setIsOpen(true)}>
        <FaSearch className={styles.icon} />
        <span>Поиск</span>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <span className={styles.cross} onClick={() => setIsOpen(false)}></span>
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

export default Search;
