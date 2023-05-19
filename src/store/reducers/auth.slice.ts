import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store';

export enum Roles {
  admin = 'admin',
  user = 'user',
  unknown = 'unknown',
}

export interface IAuth {
  user: object | null;
  token: string | null;
  role: Roles;
  favorites?: string[];
  watched?: string[];
}

const initialState: IAuth = {
  user: null,
  token: null,
  role: Roles.unknown,
  favorites: [],
  watched: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth>) => {
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
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.authReducer,
      };
    });
  },
});

export const selectAuth = (state: RootState) => state.authReducer;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
