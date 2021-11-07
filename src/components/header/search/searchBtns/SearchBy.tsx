import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import useActions from '../../../../hooks/useActions';
import useTypeSelector from '../../../../hooks/useTypeSelector';
import { SearchType } from '../../../../store/reducers/moviesReducer.interface';
import stylesSearchBy from './stylesSearchBy';
import { title, genre } from './searchBtns.constants';

interface StyledSearchByProps extends WithStylesProps<typeof stylesSearchBy> {}

const SearchBy:FC<StyledSearchByProps> = ({ classes }): React.ReactElement => {
  const { searchBy } = useTypeSelector((state) => state.movies);
  const { setSearchBy } = useActions();
  return (
    <>
      <button
        type="button"
        className={[classes.searchByBtn, classes.title].join(' ')} // searchByBtn title
        data-state={searchBy}
        onClick={() => setSearchBy(SearchType.Title)}
      >
        {title}
      </button>
      <button
        type="button"
        className={[classes.searchByBtn, classes.genres].join(' ')} // searchByBtn genre
        data-state={searchBy}
        onClick={() => setSearchBy(SearchType.Genre)}
      >
        {genre}
      </button>
    </>
  );
};

const StyledSearchBy = withStyles(stylesSearchBy)(SearchBy);

export default StyledSearchBy;
