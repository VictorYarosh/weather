import React from 'react';

import {
  AddNewButton,
  AddNewWeather,
  PlusIcon,
  AddWeatherCityWrapper,
  AddWeatherCity,
  AddDescription,
  SpinerWrapper
} from './weather-card-control.styled';
import { ImSpinner8 } from 'react-icons/im';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';
import Plus from '../../../assets/icons/plus.svg';
import useWeatherCardControl from './use-weather-card-control';
import SearchWeather from '../search-weather';

const WeatherCardControl = () => {
  const { handleAddSearch, isActive, data } = useWeatherCardControl();

  return (
    <WeatherCardWrapper>
      {isActive ? (
        <>
          <SearchWeather />
          <AddWeatherCityWrapper>
            {!data ? (
              <SpinerWrapper>
                <ImSpinner8 />
              </SpinerWrapper>
            ) : (
              <AddWeatherCity>New location</AddWeatherCity>
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
