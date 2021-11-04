import React from 'react';
import useActions from '../../../hooks/useActions';
import useTypeSelector from '../../../hooks/useTypeSelector';
import { SearchType } from '../../../store/reducers/moviesReducer.interface';

const SearchBy = (): React.ReactElement => {
  const { searchBy } = useTypeSelector((state) => state.movies);
  const { setSearchBy } = useActions();
  return (
    <>
      <button
        type="button"
        className="searchByBtn title"
        data-state={searchBy}
        onClick={() => setSearchBy(SearchType.Title)}
      >
        Title
      </button>
      <button
        type="button"
        className="searchByBtn genre"
        data-state={searchBy}
        onClick={() => setSearchBy(SearchType.Genre)}
      >
        Genre
      </button>
    </>
  );
};

export default SearchBy;
