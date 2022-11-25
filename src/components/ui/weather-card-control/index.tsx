import React, { FC } from 'react';

import {
  AddNewButton,
  AddNewWeather,
  PlusIcon,
  AddWeatherCityWrapper,
  AddWeatherCity,
  AddDescription,
  SpinnerWrapper,
  SearchInput,
  SearchIconWrapper
} from './weather-card-control.styled';

import useWeatherCardControl from './use-weather-card-control';
import { WeatherCardControlProps } from './types';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';
import SpinnerIcon from '../../../assets/images/spinner.svg';
import Plus from '../../../assets/icons/plus.svg';
import SearchIcon from '../../../assets/images/search.svg';

const WeatherCardControl: FC<WeatherCardControlProps> = ({
  setCities,
  cities
}) => {
  const { handleAddSearch, handleChange, isActive, loadingCity } =
    useWeatherCardControl({
      setCities,
      cities
    });

  return (
    <WeatherCardWrapper>
      {isActive ? (
        <>
          <SearchInput>
            <input
              type="text"
              placeholder="Search country"
              value={cities}
              onChange={handleChange}
            />
            <button type="button">
              <SearchIconWrapper src={SearchIcon} />
            </button>
          </SearchInput>
          <AddWeatherCityWrapper>
            {!loadingCity ? (
              <SpinnerWrapper>
                <img src={SpinnerIcon} />
              </SpinnerWrapper>
            ) : (
              <AddWeatherCity></AddWeatherCity>
            )}
          </AddWeatherCityWrapper>
        </>
      ) : (
        <AddNewButton>
          <AddNewWeather>
            <PlusIcon src={Plus} onClick={handleAddSearch} />
          </AddNewWeather>
          <AddDescription>Add new location</AddDescription>
        </AddNewButton>
      )}
    </WeatherCardWrapper>
  );
};

export default WeatherCardControl;
