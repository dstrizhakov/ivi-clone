import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMain {
  isAuth: boolean;
}

const initialState: IMain = {
  isAuth: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = mainSlice.actions;
export default mainSlice.reducer;
