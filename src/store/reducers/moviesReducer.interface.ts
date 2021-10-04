export interface MoviesState {
  movies: unknown[];
  loading: boolean;
  error: null | string;
}

// eslint-disable-next-line no-unused-vars
export enum MoviesActionTypes {
  // eslint-disable-next-line no-unused-vars
  FETCH_MOVIES = 'FETCH_MOVIES',
  // eslint-disable-next-line no-unused-vars
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  // eslint-disable-next-line no-unused-vars
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
}

interface FetchMoviesAction {
  type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: unknown[];
}

interface FetchMoviesErrorAction {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

export type MovieAction = FetchMoviesAction | FetchMoviesSuccessAction | FetchMoviesErrorAction;
