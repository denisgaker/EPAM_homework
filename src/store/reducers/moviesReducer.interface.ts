/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
export interface MoviesState {
  movies: MovieType[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
  searchBy?: SearchType;
  query: string;
}

interface MovieType {
  title: string;
  id: number;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: [];
}

interface DataMovies {
  data: [];
}

export enum SearchType {
  Title = 'title',
  Genre = 'genre',
}

export enum MoviesActionTypes {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
  SET_MOVIES_PAGE = 'SET_MOVIES_PAGE',
  SetSearchBy = 'setSearchBy',
  SetQuery = 'SetQuery',
}

interface SetSearchQueryAction {
  type: MoviesActionTypes.SetQuery;
  payload: string;
}

interface SetSearchByAction {
  type: MoviesActionTypes.SetSearchBy;
  payload: SearchType;
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

interface SetMoviesPage {
  type: MoviesActionTypes.SET_MOVIES_PAGE;
  payload: number;
}

export type MovieAction =
  | FetchMoviesAction
  | FetchMoviesSuccessAction
  | FetchMoviesErrorAction
  | SetMoviesPage
  | SetSearchByAction
  | SetSearchQueryAction;
