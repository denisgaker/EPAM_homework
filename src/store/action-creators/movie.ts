import { Dispatch } from 'react';
import axios from 'axios';
import {
  MovieAction, MoviesActionTypes, SearchType,
} from '../reducers/moviesReducer.interface';

interface Params {
  offset: number;
  limit: number;
  search?: string | undefined;
  searchBy?: string;
}

export const fetchMovies = (page = 1, limit = 9, query = '', searchBy = 'false') => async (dispatch: Dispatch<MovieAction>): Promise<void> => {
  try {
    dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
    const params: Params = {
      offset: page * limit - limit,
      limit,
    };
    if (query !== '' && query !== undefined) params.search = query;
    if (searchBy !== 'false') params.searchBy = searchBy;
    const response = await axios.get('https://reactjs-cdp.herokuapp.com/movies', {
      params,
    });
    dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: response.data });
    dispatch({ type: MoviesActionTypes.SetTotal, payload: response.data });
  } catch (e) {
    dispatch({
      type: MoviesActionTypes.FETCH_MOVIES_ERROR,
      payload: 'Произошла ошибка при загрузке страницы',
    });
  }
};

export const fetchMovieForId = (
  movieId: string,
) => async (dispatch: Dispatch<MovieAction>): Promise<void> => {
  try {
    dispatch({ type: MoviesActionTypes.FetchMovieForId });
    const response = await axios.get(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`);
    dispatch({ type: MoviesActionTypes.FetchMovieForIdSuccess, payload: response.data });
  } catch (e) {
    dispatch({
      type: MoviesActionTypes.FetchMovieForIdError,
      payload: 'Произошла ошибка при загрузке страницы',
    });
  }
};

export const setSearchBy = (value: SearchType) => (dispatch: Dispatch<MovieAction>): void => {
  dispatch({ type: MoviesActionTypes.SetSearchBy, payload: value });
};

export const setQuery = (query: string) => (dispatch: Dispatch<MovieAction>): void => {
  dispatch({ type: MoviesActionTypes.SetQuery, payload: query });
};

// Сохранение в state id фильма
export const setMovieId = (movieId: string) => (dispatch: Dispatch<MovieAction>): void => {
  dispatch({ type: MoviesActionTypes.SetMovieId, payload: movieId });
};

export const setMoviePage = (page: number) => (dispatch: Dispatch<MovieAction>): void => {
  dispatch({ type: MoviesActionTypes.SET_MOVIES_PAGE, payload: page });
};
