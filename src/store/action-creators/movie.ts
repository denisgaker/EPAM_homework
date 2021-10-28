import { Dispatch } from 'react';
import axios from 'axios';
import { MovieAction, MoviesActionTypes, SearchType } from '../reducers/moviesReducer.interface';

interface Params {
  offset: number;
  limit: number;
  search?: string | undefined;
  searchBy?: string;
}

export const fetchMovies = (page = 1, limit = 9, query = '', searchBy = 'false') => {
  return async (dispatch: Dispatch<MovieAction>): Promise<void> => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const params: Params = {
        offset: page * limit - limit,
        limit: limit,
      };
      if (query !== '' && query !== undefined) params.search = query;
      if (searchBy !== 'false') params.searchBy = searchBy;
      const response = await axios.get('https://reactjs-cdp.herokuapp.com/movies', {
        params,
      });
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Произошла ошибка при загрузке страницы',
      });
    }
  };
};

export const fetchMovieForId = (movieId: string) => {
  return async (dispatch: Dispatch<MovieAction>): Promise<void> => {
    try {
      const response = await axios.get(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`);
      dispatch({ type: MoviesActionTypes.FetchMovieForIdSuccess, payload: response.data });
      console.log('response.data:\n', response.data);
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Произошла ошибка при загрузке страницы',
      });
    }
  };
};

export const setSearchBy = (value: SearchType) => {
  return (dispatch: Dispatch<MovieAction>): void => {
    dispatch({ type: MoviesActionTypes.SetSearchBy, payload: value });
  };
};

export const setQuery = (query: string) => {
  return (dispatch: Dispatch<MovieAction>): void => {
    dispatch({ type: MoviesActionTypes.SetQuery, payload: query });
  };
};

// Сохранение в state id фильма
export const setMovieId = (movieId: string) => {
  return (dispatch: Dispatch<MovieAction>): void => {
    dispatch({ type: MoviesActionTypes.SetMovieId, payload: movieId });
  };
};

/* export const setMoviePage = (page: number): MovieAction => {
  console.log('Клик - ф-ция setMoviePage работает, страница № ', page);
  return { type: MoviesActionTypes.SET_MOVIES_PAGE, payload: page };
}; */
