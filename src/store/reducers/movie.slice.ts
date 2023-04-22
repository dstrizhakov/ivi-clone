import { movies } from '@/mock/movies';
import { IMovie } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMovieListType {
  movies: IMovie[];
  genres: string[]; //? для удобства можем хранить список жанров среди из полученных фильмов
  years: string[]; //? годы
}

const initialState: IMovieListType = {
  movies: movies,
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
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
