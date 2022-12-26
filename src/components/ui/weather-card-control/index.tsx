import React, { FC } from 'react';
import { Form } from 'react-uforms';
import {
  AddNewButton,
  AddNewWeather,
  PlusIcon,
  AddWeatherCityWrapper,
  AddDescription,
  SpinnerWrapper,
  SearchInput,
  SearchIconWrapper,
  Spinner,
  SearchInputText
} from './weather-card-control.styled';

import useWeatherCardControl from './use-weather-card-control';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';
import SpinnerIcon from '../../../assets/images/lodiang.svg';
import Plus from '../../../assets/icons/plus.svg';
import SearchIcon from '../../../assets/images/search.svg';

const WeatherCardControl: FC = () => {
  const { handleAddSearch, handleOnSubmit, isActive, isLoading } =
    useWeatherCardControl();

  return (
    <WeatherCardWrapper>
      {isActive ? (
        <>
          <AddWeatherCityWrapper>
            {!isLoading ? (
              <SpinnerWrapper>
                <Spinner>
                  <img src={SpinnerIcon} />
                </Spinner>
              </SpinnerWrapper>
            ) : (
              <SearchInput>
                <Form onSubmit={handleOnSubmit}>
                  <SearchInputText type="text" name="search" id="search" />

                  <button type="submit">
                    <SearchIconWrapper src={SearchIcon} />
                  </button>
                </Form>
              </SearchInput>
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
