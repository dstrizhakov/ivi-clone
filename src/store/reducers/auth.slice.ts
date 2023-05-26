import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUser } from '@/types/types';

export interface IAuth {
  user: IUser | null;
  token: string | null;
  favorites?: string[];
  watched?: string[];
}

interface ISign {
  profileInfo: IUser;
  token: { token: string };
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
    setUser: (state: IAuth, action: PayloadAction<ISign>) => {
      const { profileInfo, token } = action.payload;
      state.user = profileInfo;
      state.token = token.token;
      localStorage.setItem('token', state.token);
    },
    logout: (state: IAuth) => {
      state.user = null;
      state.token = null;
      state.favorites = [];
      state.watched = [];
      localStorage.removeItem('token');
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     console.log('HYDRATE');
  //     // return {
  //     //   ...state,
  //     //   ...action.payload.authReducer,
  //     // };
  //   });
  // },
});

export const selectAuth = (state: RootState) => state.authReducer;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
