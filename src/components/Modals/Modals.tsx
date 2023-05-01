import React from 'react';
import RatingModal from '@/components/Card/RatingModal';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';
import { PersonsModal } from '@/components/WatchPage/PersonsModal/PersonsModal';
import FooterModal from '@/components/Footer/FooterModal/FooterModal';
import AuthModal from '@/components/Auth/AuthModal';

const Modals = () => {
  return (
    <div className={'modal'}>
      <AuthModal />
      <RatingModal />
      <SearchModal />
      <PersonsModal />
      <FooterModal />
    </div>
  );
};

export default Modals;
