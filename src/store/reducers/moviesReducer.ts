import { MoviesState, MoviesActionTypes, MovieAction, SearchType } from './moviesReducer.interface';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  limit: 9,
  searchBy: SearchType.Title,
  query: '',
  // Для хранения id фильма
  movieId: '',
  // Для хранения данных по фильму
  movie: {
    title: '',
    genres: [],
    id: null,
    overview: '',
    poster_path: '',
    release_date: '',
  },
};

export const moviesReducer = (state = initialState, action: MovieAction): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.FetchMovieForIdSuccess:
      return { ...state, loading: false, error: null, movie: action.payload };
    case MoviesActionTypes.SetMovieId:
      return { ...state, loading: false, error: null, movieId: action.payload }; // Сохранение в state id фильма
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
