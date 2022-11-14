import React from 'react';

import {
  AddNewButton,
  AddNewWeather,
  PlusIcon,
  AddWeatherCityWrapper,
  AddWeatherCity,
  AddDescription,
  SpinnerWrapper
} from './weather-card-control.styled';
import SpinnerIcon from '../../../assets/images/spinner.svg';
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
              <SpinnerWrapper>
                <img src={SpinnerIcon} />
              </SpinnerWrapper>
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
