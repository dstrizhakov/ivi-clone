import React, { FC } from 'react';
import styles from './SearchButton.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setShowSearch } from '@/store/reducers/modals.slice';

const SearchButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className={styles.search} onClick={() => dispatch(setShowSearch(true))}>
      <FaSearch className={styles.icon} />
      <span>{t('sections.search')}</span>
    </div>
  );
};

export default SearchButton;
