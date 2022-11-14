import React from 'react';

import { SearchInput } from './search.styles';
import { IoMdSearch } from 'react-icons/io';
import useSearchWeather from './use-search-weather';

const SearchWeather = () => {
  const { handleOnChange, search } = useSearchWeather();

  return (
    <SearchInput>
      <input type="text" placeholder="Search country" />
      <button type="button">
        <IoMdSearch />
      </button>
    </SearchInput>
  );
};

export default SearchWeather;
