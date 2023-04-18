import React, { FC } from 'react';
import styles from './SearchButton.module.scss';
import { FaSearch } from 'react-icons/fa';
import { SearchButtonProps } from './SearchButton.props';

const SearchButton: FC<SearchButtonProps> = ({ openSearch }): JSX.Element => {
  return (
    <>
      <div className={styles.search} onClick={openSearch}>
        <FaSearch className={styles.icon} />
        <span>Поиск</span>
      </div>
    </>
  );
};

export default SearchButton;
