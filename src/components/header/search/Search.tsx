import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { NavLink } from 'react-router-dom';
import useActions from '../../../hooks/useActions';
import useTypeSelector from '../../../hooks/useTypeSelector';
import SearchBy from './searchBtns/SearchBy';
import { btnText, cta, placeholder } from './constants';
import styles from './style';

interface StylesSearchProps extends WithStylesProps<typeof styles> {}

const Search:FC<StylesSearchProps> = ({ classes }) => {
  const {
    query, searchBy, limit, page,
  } = useTypeSelector((state) => state.movies);
  const { setQuery, fetchMovies, setMoviePage } = useActions();
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  /* const searchClickHandler = () => {
    useEffect(() => {
      fetchMovies(page, limit, query, searchBy);
      setMoviePage(1);
    }, []);
  }; */

  return (
    <div className={classes.search}>
      <h2>{cta}</h2>
      <input
        type="text"
        id="headerSearch"
        className={classes.headerSearch}
        placeholder={placeholder}
        value={query}
        onChange={(event) => searchHandler(event)}
        // onChange={(event) => setQuery(event.target.value)}
      />
      <div className={classes.searchCtrl}>
        <SearchBy />
        <button
          type="button"
          id="headerSearchBtn"
          className={classes.headerSearchBtn}
          onClick={() => { fetchMovies(page, limit, query, searchBy); setMoviePage(1); } }
        >
          <NavLink to={{ pathname: '/films', search: `?searchBy=${searchBy}&query=${query}` }}>
            {btnText}
          </NavLink>
        </button>
      </div>
    </div>
  );
};

const StyledSearch = withStyles(styles)(Search);

export default StyledSearch;
