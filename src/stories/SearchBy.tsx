import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { SearchType } from '../store/reducers/moviesReducer.interface';
import stylesSearchBy from '../components/header/search/searchBtns/stylesSearchBy';

interface StyledSearchByProps extends WithStylesProps<typeof stylesSearchBy> {
  label1: string
  label2: string
  label: string
  searchBy: SearchType
  backgroundColor: string
}

const SearchBy:FC<StyledSearchByProps> = (
  {
    classes,
  },
  {
    label1 = 'Title',
    label2 = 'Genres',
    searchBy = SearchType.Title,
    backgroundColor,
  },
) => {
  console.log('Компонент с кнопками для выбора параметров поиска');
  return (
    <>
      <button
        type="button"
        className={[classes.searchByBtn, classes.title].join(' ')} // searchByBtn title
        data-state={searchBy}
        style={{ backgroundColor }}
      >
        {label1}
      </button>
      <button
        type="button"
        className={[classes.searchByBtn, classes.genres].join(' ')} // searchByBtn genre
        data-state={searchBy}
        style={{ backgroundColor }}
      >
        {label2}
      </button>
    </>
  );
};

const StyledSearchBy = withStyles(stylesSearchBy)(SearchBy);

export default StyledSearchBy;
