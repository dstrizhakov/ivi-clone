import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IMovie } from '@/types/types';
import { HYDRATE } from 'next-redux-wrapper';

interface iModal {
  showAuth: boolean;
  showRating: boolean;
  showSearch: boolean;
  showPersonsModal: boolean;
  showFooterModal: boolean;
  showEditProfile: boolean;
  personModalItem: IMovie | null;
}

const initialState: iModal = {
  showAuth: false,
  showRating: false,
  showSearch: false,
  showPersonsModal: false,
  showFooterModal: false,
  showEditProfile: false,
  personModalItem: null,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setPersonItems: (state, action: PayloadAction<IMovie>) => {
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
    setShowEditProfile: (state, action: PayloadAction<boolean>) => {
      state.showEditProfile = action.payload;
    },
  },
  //>>>>>>
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.modalsReducer,
      };
    });
  },
});

export const selectModal = (state: RootState) => state.modalsReducer;
export const {
  setShowAuth,
  setShowSearch,
  setShowRating,
  setShowPersonsModal,
  setShowFooterModal,
  setShowEditProfile,
  setPersonItems,
} = modalsSlice.actions;
export default modalsSlice.reducer;
