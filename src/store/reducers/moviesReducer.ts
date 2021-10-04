import { MoviesState, MoviesActionTypes, MovieAction } from './moviesReducer.interface';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const moviesReducer = (state = initialState, action: MovieAction): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return { loading: true, error: null, movies: [] };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { loading: false, error: null, movies: action.payload };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, movies: [] };
    default:
      return state;
  }
};
