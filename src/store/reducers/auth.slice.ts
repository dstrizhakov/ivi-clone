import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store';
import { authApi } from "@/services/auth.api";

export enum Roles {
  admin = 'admin',
  user = 'user',
  unknown = 'unknown',
}

export interface IAuth {
  user: object | null;
  token: string | null;
  favorites?: string[];
  watched?: string[];
}

const initialState: IAuth = {
  user: null,
  token: null,
  favorites: [],
  watched: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      if (typeof action.payload.token === 'string') {
        localStorage.setItem('token', action.payload.token);
      } ///
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state = initialState;
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
export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
