import * as React from 'react';
import { SearchProps } from './Search.interface';
import SearchBy from './searchBtns/SearchBy';

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
          <SearchBy />
        </div>
        <button type="button" id="headerSearchBtn">
          {searchBtnText}
        </button>
      </div>
    </div>
  );
};

export default Search;
