import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
