import * as React from 'react';
import withStyles from 'react-jss';
import { NavLink } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypeSelector from '../../hooks/useTypeSelector';
import { SearchProps } from './Search.interface';
import SearchBy from './searchBtns/SearchBy';

import styles from './style';

const Search: React.FC<SearchProps> = ({
  searchCTA,
  searchPlaceholder,
  searchBtnText,
  classes,
}) => {
  const {
    query, searchBy, page, limit,
  } = useTypeSelector((state) => state.movies);
  const { setQuery, fetchMovies } = useActions();
  return (
    <div className={classes.search}>
      <h2>{searchCTA}</h2>
      <input
        type="text"
        id="headerSearch"
        className={classes.headerSearch}
        placeholder={searchPlaceholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={classes.searchCtrl}>
        <div className={classes.searchBy}>
          <span>Search by</span>
          <SearchBy />
        </div>
        <button
          type="button"
          id="headerSearchBtn"
          className={classes.headerSearchBtn}
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

const StyledSearch = withStyles(styles)(Search);

export default StyledSearch;
