import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IMovie } from '@/types/types';

interface iModal {
  showAuth: boolean;
  showRating: boolean;
  showSearch: boolean;
  showPersonsModal: boolean;
  showFooterModal: boolean;
  personModalItem: IMovie | null;
}

const initialState: iModal = {
  showAuth: false,
  showRating: false,
  showSearch: false,
  showPersonsModal: false,
  showFooterModal: false,
  personModalItem: null,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setPersonItems: (state, action: PayloadAction<boolean>) => {
      state.personModalItem = action.payload;
    },
    setShowAuth: (state, action: PayloadAction<boolean>) => {
      state.showAuth = action.payload;
    },
    setShowRating: (state, action: PayloadAction<boolean>) => {
      state.showRating = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    setShowPersonsModal: (state, action: PayloadAction<boolean>) => {
      state.showPersonsModal = action.payload;
    },
    setShowFooterModal: (state, action: PayloadAction<boolean>) => {
      state.showFooterModal = action.payload;
    },
  },
});

export const selectModal = (state: RootState) => state.modalsReducer;
export const {
  setShowAuth,
  setShowSearch,
  setShowRating,
  setShowPersonsModal,
  setShowFooterModal,
  setPersonItems,
} = modalsSlice.actions;
export default modalsSlice.reducer;
