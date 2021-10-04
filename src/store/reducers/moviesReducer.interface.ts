/* eslint-disable no-unused-vars */
export interface MoviesState {
  movies: MovieType[];
  loading: boolean;
  error: null | string;
}

interface MovieType {
  title: string;
  id: number;
  // eslint-disable-next-line camelcase
  poster_path: string;
  overview: string;
  // eslint-disable-next-line camelcase
  release_date: string;
  genres: [];
}

interface DataMovies {
  data: [];
}

export enum MoviesActionTypes {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
}

interface FetchMoviesAction {
  type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: DataMovies;
}

interface FetchMoviesErrorAction {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

export type MovieAction = FetchMoviesAction | FetchMoviesSuccessAction | FetchMoviesErrorAction;
