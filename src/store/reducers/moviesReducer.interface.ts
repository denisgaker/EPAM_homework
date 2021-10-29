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
  movieId: string; // Для хранения id фильма
  movie: MovieType; // Для хранения данных по фильму
}

/* // Интерфейс для запроса конкретного фильма по ID
export interface MovieIdState {
  movie: MovieType;
  loading: boolean;
  error: null | string;
  movieId: string;
} */

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
  FetchMovieForId = 'FetchMovieForId', // Запрос фильма по id
  FetchMovieForIdSuccess = 'FetchMovieForIdSuccess', // Запрос фильма по id
  FetchMovieForIdError = 'FetchMovieForIdError', // Неудачный запрос фильма по id
  SET_MOVIES_PAGE = 'SET_MOVIES_PAGE',
  SetSearchBy = 'setSearchBy',
  SetQuery = 'SetQuery',
  SetMovieId = 'SetMovieId', // Сохранение в state id фильма
}

interface FetchMovieForIdAction {
  type: MoviesActionTypes.FetchMovieForId;
}

interface FetchMovieForIdSuccessAction {
  type: MoviesActionTypes.FetchMovieForIdSuccess;
  payload: MovieType;
}

interface FetchMovieForIdErrorAction {
  type: MoviesActionTypes.FetchMovieForIdError;
  payload: string;
}

// Сохранение в state id фильма
interface SetMovieIdAction {
  type: MoviesActionTypes.SetMovieId;
  payload: string;
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
  | SetSearchQueryAction
  | SetMovieIdAction // Сохранение в state id фильма
  | FetchMovieForIdAction // Запрос фильма по id
  | FetchMovieForIdSuccessAction // Успешный запрос фильма по id
  | FetchMovieForIdErrorAction; // Неудачный запрос фильма по id
