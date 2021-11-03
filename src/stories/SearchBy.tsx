import React from 'react';
// //import useActions from '../hooks/useActions';
// //import useTypeSelector from '../hooks/useTypeSelector';
// import { SearchType } from '../store/reducers/moviesReducer.interface';
import '../header/style.css';
import { SearchType } from '../store/reducers/moviesReducer.interface';

interface SearchByStory {
  backgroundColor?: string;
  active?: boolean;
  label: string;
  searchBy: SearchType;
}

const SearchBy = ({
  backgroundColor,
  active = true,
  label = 'Title',
  searchBy = SearchType.Title,
}: SearchByStory) => {
  // eslint-disable-next-line no-param-reassign
  searchBy = active ? SearchType.Title : SearchType.Genre;
  return (
    <button
      type="button"
      className={['searchByBtn', 'title', searchBy].join(' ')}
      style={{ backgroundColor }}
      data-state={searchBy}
    >
      {label}
  </button>
  );
};
/* const SearchBy = (): React.ReactElement => {
  let searchBy = SearchType.Title;
  return (
    <>
      <button
        type="button"
        className={`searchByBtn title ${searchBy}`}
        data-state={searchBy}
        onClick={() => { searchBy = SearchType.Title; }}
      >
        Title
      </button>
      <button
        type="button"
        className={`searchByBtn genre ${searchBy}`}
        data-state={searchBy}
        onClick={() => { searchBy = SearchType.Genre; }}
      >
        Genre
      </button>
    </>
  );
}; */

export default SearchBy;
