import { Dispatch } from 'react';
import { SearchActions, SearchTypes } from '../reducers/searchReducer.interface';

export const searchByGenre = () => {
  return (dispatch: Dispatch<SearchActions>): void => {
    dispatch({ type: SearchTypes.SEARCH_BY_GENRE, payload: 'genre' });
  };
};

export const searchByTitle = () => {
  return (dispatch: Dispatch<SearchActions>): void => {
    dispatch({ type: SearchTypes.SEARCH_BY_TITLE, payload: 'title' });
  };
};
