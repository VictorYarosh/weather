import React from 'react';

import {
  AddNewButton,
  AddNewWeather,
  SearchInput,
  PlusIcon,
  AddWeatherCityWrapper,
  AddWeatherCity,
  AddDescription
} from './weather-card-control.styled';
import { ImSpinner8 } from 'react-icons/im';
import { IoMdSearch } from 'react-icons/io';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';
import Plus from '../../../assets/icons/plus.svg';
import useWeatherCardControl from './use-weather-card-control';

const WeatherCardControl = () => {
  const { handleInput, handleSubmit, handleAddSearch, isActive, data } =
    useWeatherCardControl();

  return (
    <WeatherCardWrapper>
      {isActive ? (
        <SearchInput>
          <input
            type="text"
            placeholder="Search country"
            onChange={(e) => handleInput(e)}
          />
          <button type="button" onClick={(e) => handleSubmit(e)}>
            <IoMdSearch />
          </button>
        </SearchInput>
      ) : (
        <AddNewButton>
          <AddNewWeather>
            <PlusIcon src={Plus} onClick={handleAddSearch} />
          </AddNewWeather>
          <AddDescription>Add new location</AddDescription>
        </AddNewButton>
      )}
      {/*<AddWeatherCityWrapper>*/}
      {/*  <AddWeatherCity></AddWeatherCity>*/}
      {/*</AddWeatherCityWrapper>*/}
    </WeatherCardWrapper>
  );
};

export default WeatherCardControl;
