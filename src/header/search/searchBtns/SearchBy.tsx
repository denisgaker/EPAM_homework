import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypeSelector } from '../../../hooks/useTypeSelector';

const SearchBy = (): React.ReactElement => {
  const { searchBy } = useTypeSelector((state) => state.search);
  const { searchByGenre, searchByTitle } = useActions();

  return (
    <>
      <button
        onClick={() => searchByTitle()}
        type="button"
        className="searchByBtn"
        id="searchByTitle"
        data-search={searchBy}
      >
        Title
      </button>
      <button
        onClick={() => searchByGenre()}
        type="button"
        className="searchByBtn"
        id="searchByGenre"
        data-search={searchBy}
      >
        Genre
      </button>
    </>
  );
};

export default SearchBy;
