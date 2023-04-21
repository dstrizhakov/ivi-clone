import { movieAPI } from '@/services/movie.api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.slice';
import movieReducer from './reducers/movie.slice';

const rootReducer = combineReducers({
  authReducer,
  movieReducer,
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
