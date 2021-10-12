import React from 'react';
import { SearchProps } from '../Search.interface';

const SearchStart = (searchBtnText: SearchProps): React.ReactElement => {
  return (
    <button type="button" id="headerSearchBtn">
      {searchBtnText}
    </button>
  );
};

export default SearchStart;
