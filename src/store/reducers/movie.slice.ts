import { moviesData } from '@/mock/moviesData';
import { IMovie } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface IMovieListType {
  movies: IMovie[];
  genres: string[]; //? для удобства можем хранить список жанров среди из полученных фильмов
  years: string[]; //? годы
}

const initialState: IMovieListType = {
  movies: moviesData,
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
export default moviesSlice.reducer;
