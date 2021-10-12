import { MoviesState, MoviesActionTypes, MovieAction } from './moviesReducer.interface';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  limit: 9,
  searchBy: undefined,
  query: '',
};

export const moviesReducer = (state = initialState, action: MovieAction): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.SetSearchBy:
      return { ...state, searchBy: action.payload };
    case MoviesActionTypes.SetQuery:
      return { ...state, query: action.payload };
    case MoviesActionTypes.FETCH_MOVIES:
      return { ...state, loading: true, error: null };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, error: null, movies: action.payload.data };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case MoviesActionTypes.SET_MOVIES_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
