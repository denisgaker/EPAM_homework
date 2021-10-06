/* eslint-disable no-unused-vars */
export interface SearchState {
  searchBy: string;
}

export enum SearchTypes {
  SEARCH_BY_TITLE = 'SEARCH_BY_TITLE',
  SEARCH_BY_GENRE = 'SEARCH_BY_GENRE',
}

interface SearchByTitle {
  type: SearchTypes.SEARCH_BY_TITLE;
  payload: string;
}

interface SearchByGenre {
  type: SearchTypes.SEARCH_BY_GENRE;
  payload: string;
}

export type SearchActions = SearchByTitle | SearchByGenre;
