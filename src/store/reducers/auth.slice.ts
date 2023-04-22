import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IAuth {
  user: string | null;
  token: string | null;
  role: 'user' | 'admin' | null;
  favorites: string[];
  watched: string[];
}

const initialState: IAuth = {
  user: null,
  token: null,
  role: 'user',
  favorites: [],
  watched: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        user: string;
        role: 'user' | 'admin' | null;
        favorites: string[];
        watched: string[];
        accessToken: string;
      }>
    ) => {
      const { user, role, favorites, watched, accessToken } = action.payload;
      state.token = accessToken;
      state.user = user;
      state.role = role;
      state.favorites = favorites;
      state.watched = watched;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.role = null;
      state.favorites = [];
      state.watched = [];
    },
  },
});

export const selectAuth = (state: RootState) => state.authReducer;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
