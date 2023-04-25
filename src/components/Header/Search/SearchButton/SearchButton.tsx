import React, { FC } from 'react';
import styles from './SearchButton.module.scss';
import { FaSearch } from 'react-icons/fa';
import { SearchButtonProps } from './SearchButton.props';
import { useTranslation } from 'react-i18next';

const SearchButton: FC<SearchButtonProps> = ({ openSearch }): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.search} onClick={openSearch}>
        <FaSearch className={styles.icon} />
        <span>{t('sections.search')}</span>
      </div>
    </>
  );
};

export default SearchButton;
