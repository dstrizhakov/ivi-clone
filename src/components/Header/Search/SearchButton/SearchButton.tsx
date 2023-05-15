import React, { FC } from 'react';
import styles from './SearchButton.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { setShowSearch } from '@/store/reducers/modals.slice';
import { useAppDispatch } from '@/hooks/redux';

const SearchButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const open = () => {
    dispatch(setShowSearch(true));
  };
  return (
    <div className={styles.search} onClick={() => open()}>
      <FaSearch className={styles.icon} />
      <span>{t('sections.search')}</span>
    </div>
  );
};

export default SearchButton;
