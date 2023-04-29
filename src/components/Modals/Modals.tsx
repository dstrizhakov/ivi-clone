import React from 'react';
import RatingModal from '@/components/Card/RatingModal';
import { selectModal, setShowRating, setShowSearch } from '@/store/reducers/modals.slice';
import { useDispatch, useSelector } from 'react-redux';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';

const Modals = () => {
  const dispatch = useDispatch();
  const { showRating, showSearch } = useSelector(selectModal);
  return (
    <>
      <RatingModal isOpen={showRating} closeModal={() => dispatch(setShowRating(false))} />
      <SearchModal isOpen={showSearch} closeSearch={() => dispatch(setShowSearch(false))} />
    </>
  );
};

export default Modals;
