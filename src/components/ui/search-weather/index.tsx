import React from 'react';
import SearchIcon from '../../../assets/images/search.svg';

import { SearchIconWrapper, SearchInput } from './search.styles';
import useSearchWeather from './use-search-weather';

const SearchWeather = () => {
  const { handleOnChange, search } = useSearchWeather();

  return (
    <SearchInput>
      <input type="text" placeholder="Search country" />
      <button type="button">
        <SearchIconWrapper src={SearchIcon} />
      </button>
    </SearchInput>
  );
};

export default SearchWeather;
