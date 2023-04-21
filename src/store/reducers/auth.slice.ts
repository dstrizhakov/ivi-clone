import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IAuth {
  user: string | null;
  token: string | null;
  role: 'user' | 'admin';
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
    setUser: (state, action) => {
      const { user, accessToken } = action.payload;
      state.token = accessToken;
      state.user = user;
    },
  },
});

export const selectAuth = (state: RootState) => state.authReducer;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
