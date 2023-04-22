import { authApi } from '@/services/auth.api';
import { movieApi } from '@/services/movie.api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './reducers/auth.slice';
import movieReducer from './reducers/movie.slice';

const rootReducer = combineReducers({
  authReducer,
  movieReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware).concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);
