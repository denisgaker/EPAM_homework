import * as React from 'react';
import { SearchProps } from './Search.interface';

const Search: React.FC<SearchProps> = ({
  searchCTA,
  searchPlaceholder,
  searchBtnText,
}: SearchProps) => {
  return (
    <div className="search">
      <h2>{searchCTA}</h2>
      <input
        type="text"
        id="headerSearch"
        className="headerSearch"
        placeholder={searchPlaceholder}
      />
      <div className="searchCtrl">
        <div className="searchBy">
          <span>Search by</span>
          <label htmlFor="searchByTitle">
            <input type="radio" name="searchBy_ctrl" id="searchByTitle" />
            <span>Title</span>
          </label>
          <label htmlFor="searchByGenre">
            <input type="radio" name="searchBy_ctrl" id="searchByGenre" />
            <span>Genre</span>
          </label>
        </div>
        <button type="button" id="headerSearchBtn">
          {searchBtnText}
        </button>
      </div>
    </div>
  );
};

export default Search;
