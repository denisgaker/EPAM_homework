import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { SearchType } from '../../../store/reducers/moviesReducer.interface';

const SearchBy = (): React.ReactElement => {
  const { searchBy } = useTypeSelector((state) => state.movies);
  const { setSearchBy } = useActions();
  console.log('searchBy: ', searchBy);
  return (
    <>
      <button type="button" className="searchByBtn" onClick={() => setSearchBy(SearchType.Title)}>
        Title
      </button>
      <button type="button" className="searchByBtn" onClick={() => setSearchBy(SearchType.Genre)}>
        Genre
      </button>
    </>
  );
};

export default SearchBy;