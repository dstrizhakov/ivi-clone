import { authApi } from '@/services/auth.api';
import { movieApi } from '@/services/movie.api';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './reducers/auth.slice';
import movieReducer from './reducers/movie.slice';

const rootReducer = combineReducers({
  authReducer,
  movieReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware).concat(authApi.middleware),
  });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore);

setupListeners(store.dispatch);
