import { Dispatch } from 'react';
import axios from 'axios';
import { MovieAction, MoviesActionTypes } from '../reducers/moviesReducer.interface';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MovieAction>): Promise<void> => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const response = await axios.get('https://reactjs-cdp.herokuapp.com/movies');
      console.log('response: ', response.data);
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Произошла ошибка при загрузке страницы',
      });
    }
  };
};
