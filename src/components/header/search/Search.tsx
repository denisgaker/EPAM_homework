import * as React from 'react';
import { NavLink } from 'react-router-dom';
import useActions from '../../../hooks/useActions';
import useTypeSelector from '../../../hooks/useTypeSelector';
import { SearchProps } from './Search.interface';
import SearchBy from './searchBtns/SearchBy';
import { searchBtnText, searchCTA, searchPlaceholder } from './constants';

const Search: React.FC<SearchProps> = () => {
  const {
    query, searchBy, page, limit,
  } = useTypeSelector((state) => state.movies);
  const { setQuery, fetchMovies } = useActions();
  console.log('searchBy: ', searchBy);
  return (
    <div className="search">
      <h2>{searchCTA}</h2>
      <input
        type="text"
        id="headerSearch"
        className="headerSearch"
        placeholder={searchPlaceholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="searchCtrl">
        <div className="searchBy">
          <span>Search by</span>
          <SearchBy />
        </div>
        <button
          type="button"
          id="headerSearchBtn"
          onClick={() => fetchMovies(page, limit, query, searchBy)}
        >
          <NavLink to={{ pathname: '/films', search: `?searchBy=${searchBy}&query=${query}` }}>
            {searchBtnText}
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Search;
