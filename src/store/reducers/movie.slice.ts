import { IMovie } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

export interface IMovieListType {
  movies: IMovie[] | null;
  genres: string[]; //? для удобства можем хранить список жанров среди из полученных фильмов
  years: string[]; //? годы
}

const initialState: IMovieListType = {
  movies: null, //moviesData: huge data on first load
  genres: [],
  years: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload;
      state.genres = Array.from(new Set(state.movies.flatMap((movie) => movie.genres)));
      state.years = Array.from(new Set(state.movies.flatMap((movie) => movie.year)));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.movieReducer,
      };
    });
  },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movieReducer;
export default moviesSlice.reducer;
