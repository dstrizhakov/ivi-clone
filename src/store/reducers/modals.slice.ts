import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface iModal {
  showRating: boolean;
  showSearch: boolean;
}

const initialState: iModal = {
  showRating: false,
  showSearch: false,
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
  },
});

export const selectModal = (state: RootState) => state.modalsReducer;
export const { setShowSearch, setShowRating } = modalsSlice.actions;
export default modalsSlice.reducer;
