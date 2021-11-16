import { Dispatch } from 'react';
import axios from 'axios';
import {
  MovieAction, MoviesActionTypes, SearchType, MoviesState,
} from '../reducers/moviesReducer.interface';

interface Params {
  offset: number;
  limit: number;
  search?: string | undefined;
  searchBy?: string;
}

interface ServerResponse {
  data: MoviesState
}

export const fetchMovies = (page = 1, limit = 9, query = '', searchBy = 'false') => async (dispatch: Dispatch<MovieAction>): Promise<ServerResponse> => {
  try {
    dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
    const params: Params = {
      offset: page * limit - limit,
      limit,
    };
    if (query !== '' && query !== undefined) params.search = query;
    if (searchBy !== 'false') params.searchBy = searchBy;
    const { data } = await axios.get('https://reactjs-cdp.herokuapp.com/movies', {
      params,
    });
    dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: data });
    dispatch({ type: MoviesActionTypes.SetTotal, payload: data });
    return data;
  } catch (e) {
    dispatch({
      type: MoviesActionTypes.FETCH_MOVIES_ERROR,
      payload: 'Произошла ошибка при загрузке страницы',
    });
    return e;
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
