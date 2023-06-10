import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { moviesSlice } from '@/store/reducers/movie.slice';
import { HYDRATE } from 'next-redux-wrapper';

interface iFilters {
  genres: string[];
  persons: string[];
  actors: string[];
  countries: string[];
  rating: number;
  rates_amount: number;
}

const initialState: iFilters = {
  genres: [],
  persons: [],
  actors: [],
  countries: [],
  rating: 0,
  rates_amount: 0,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters: () => {
      return initialState;
    },
    setGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
    setPersons: (state, action: PayloadAction<string[]>) => {
      state.persons = action.payload;
    },
    setActors: (state, action: PayloadAction<string[]>) => {
      state.actors = action.payload;
    },
    setCountries: (state, action: PayloadAction<string[]>) => {
      state.countries = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setRatesAmount: (state, action: PayloadAction<number>) => {
      state.rates_amount = action.payload;
    },
  },
  //>>>>>>
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.filtersReducer,
      };
    });
  },
});

export const {
  resetFilters,
  setGenres,
  setPersons,
  setActors,
  setCountries,
  setRating,
  setRatesAmount,
} = moviesSlice.actions;
export const selectFilters = (state: RootState) => state.filtersReducer;
export default filtersSlice.reducer;
