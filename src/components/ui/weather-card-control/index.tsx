import React, { FC } from 'react';
import { Form, Text } from 'react-uforms';
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
  const { handleAddSearch, handleOnChange, isActive, loadingCity } =
    useWeatherCardControl({
      setCities,
      cities
    });

  return (
    <WeatherCardWrapper>
      {isActive ? (
        <>
          <SearchInput>
            <Form onSubmit={handleOnChange}>
              <Text type="text" name="search" id="search" />

              <button type="submit">
                <SearchIconWrapper src={SearchIcon} />
              </button>
            </Form>
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
