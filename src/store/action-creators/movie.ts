import { Dispatch } from 'react';
import axios from 'axios';
import { MovieAction, MoviesActionTypes } from '../reducers/moviesReducer.interface';

export const fetchMovies = (page = 1, limit = 9) => {
  return async (dispatch: Dispatch<MovieAction>): Promise<void> => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const response = await axios.get('https://reactjs-cdp.herokuapp.com/movies', {
        params: { offset: page * limit - limit, limit: limit },
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

/* export const setMoviePage = (page: number): MovieAction => {
  console.log('Клик - ф-ция setMoviePage работает, страница № ', page);
  return { type: MoviesActionTypes.SET_MOVIES_PAGE, payload: page };
}; */
