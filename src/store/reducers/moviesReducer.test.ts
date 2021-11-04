// import React from 'react';
import '@testing-library/jest-dom';
/* import { render, screen } from '@testing-library/react';
import { moviesReducer } from './moviesReducer';
import { MoviesState, SearchType } from './moviesReducer.interface'; */
import { setSearchBy } from '../action-creators/movie';
import useTypeSelector from '../../hooks/useTypeSelector';
import { SearchType } from './moviesReducer.interface';

it('SearchBy shuod be "title"', () => {
  setSearchBy(SearchType.Title);
  const { searchBy } = useTypeSelector((state) => state.movies);
  expect(searchBy).toBe('title');
  /* const initialState: MoviesState = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    limit: 9,
    searchBy: undefined,
    query: '',
  };
  const action = setSearchBy(SearchType.Title);
  const newState = moviesReducer(initialState, action);

  expect(newState.searchBy).toBe('title'); */
});
