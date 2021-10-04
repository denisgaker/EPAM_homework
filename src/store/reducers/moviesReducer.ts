import { MoviesState, MoviesActionTypes, MovieAction } from './moviesReducer.interface';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const moviesReducer = (state = initialState, action: MovieAction): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return { ...state, loading: true, error: null };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { loading: false, error: null, movies: action.payload.data };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, movies: [] };
    default:
      return state;
  }
};
