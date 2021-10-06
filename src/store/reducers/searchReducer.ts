import { SearchState, SearchActions, SearchTypes } from './searchReducer.interface';

const defaultState: SearchState = {
  searchBy: 'false',
};

export const searchReducer = (state = defaultState, action: SearchActions): SearchState => {
  const titleBtn = document.getElementById('searchByTitle');
  const genreBtn = document.getElementById('searchByGenre');
  switch (action.type) {
    case SearchTypes.SEARCH_BY_TITLE:
      titleBtn.classList.toggle('active');
      if (genreBtn.classList.contains('active')) genreBtn.classList.remove('active');
      if (state.searchBy === action.payload) return { ...state, searchBy: 'false' };
      return { ...state, searchBy: action.payload };
    case SearchTypes.SEARCH_BY_GENRE:
      genreBtn.classList.toggle('active');
      if (titleBtn.classList.contains('active')) titleBtn.classList.remove('active');
      if (state.searchBy === action.payload) return { ...state, searchBy: 'false' };
      return { ...state, searchBy: action.payload };
    default:
      return state;
  }
};
