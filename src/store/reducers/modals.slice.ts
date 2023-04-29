import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IMovie } from '@/types/types';
import { moviesData } from '@/mock/moviesData';

interface iModal {
  showRating: boolean;
  showSearch: boolean;
  showPersonsModal: boolean;
  personModalItem: IMovie;
}

const initialState: iModal = {
  showRating: false,
  showSearch: false,
  showPersonsModal: false,
  personModalItem: moviesData[0],
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setShowRating: (state, action: PayloadAction<boolean>) => {
      state.showRating = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    setShowPersonsModal: (state, action: PayloadAction<boolean>) => {
      state.showPersonsModal = action.payload;
    },
    setPersonItems: (state, action: PayloadAction<boolean>) => {
      state.personModalItem = action.payload;
    },
  },
});

export const selectModal = (state: RootState) => state.modalsReducer;
export const { setShowSearch, setShowRating, setShowPersonsModal, setPersonItems } =
  modalsSlice.actions;
export default modalsSlice.reducer;
