import React from 'react';
import RatingModal from '@/components/Card/RatingModal';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';
import { PersonsModal } from '@/components/WatchPage/PersonsModal/PersonsModal';

const Modals = () => {
  return (
    <>
      <RatingModal />
      <SearchModal />
      <PersonsModal />
    </>
  );
};

export default Modals;
