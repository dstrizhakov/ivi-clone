import React from 'react';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setShowEditProfile } from '@/store/reducers/modals.slice';

const EditProfileModal = () => {
  const { showEditProfile } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowEditProfile(false));
  };
  return (
    <FullScreenModal isOpen={showEditProfile} closeModal={close}>
      <div>nickname</div>
      <div>email</div>
      <div>country</div>
      <div>city</div>
      <div>photo</div>
    </FullScreenModal>
  );
};

export default EditProfileModal;
