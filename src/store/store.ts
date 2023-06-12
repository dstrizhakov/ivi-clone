import { authApi } from '@/services/auth.api';
import { movieApi } from '@/services/movie.api';
import { personApi } from '@/services/person.api';
import { commentsApi } from '@/services/comments.api';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './reducers/auth.slice';
import movieReducer from './reducers/movie.slice';
import filtersReducer from './reducers/filters.slice';
import modalsReducer from './reducers/modals.slice';

const rootReducer = combineReducers({
  authReducer,
  filtersReducer,
  movieReducer,
  modalsReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [personApi.reducerPath]: personApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(movieApi.middleware)
        .concat(personApi.middleware)
        .concat(authApi.middleware)
        .concat(commentsApi.middleware),
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

// export const wrapper = createWrapper<RootStore>(makeStore, { debug: true });
export const wrapper = createWrapper<RootStore>(makeStore);

setupListeners(store.dispatch);
