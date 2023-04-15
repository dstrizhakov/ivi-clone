import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers/Main/main.slice';

const rootReducer = combineReducers({
  mainReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
