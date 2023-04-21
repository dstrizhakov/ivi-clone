import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuth {
  token: string | null;
  isAuth: boolean;
  isAdmin: boolean;
  favorites: string[];
  watched: string[];
}

const initialState: IAuth = {
  token: null,
  isAuth: false,
  isAdmin: false,
  favorites: [],
  watched: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    removeToken: (state) => {
      state.token = null;
      state.isAuth = false;
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setToken, updateToken, removeToken, setIsAuth } = authSlice.actions;
export default authSlice.reducer;
