import React, { FC } from 'react';
import { Form, Text } from 'react-uforms';
import {
  AddNewButton,
  AddNewWeather,
  PlusIcon,
  AddWeatherCityWrapper,
  AddDescription,
  SearchInput,
  SearchIconWrapper
} from './weather-card-control.styled';

import useWeatherCardControl from './use-weather-card-control';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';
import Plus from '../../../assets/icons/plus.svg';
import SearchIcon from '../../../assets/images/search.svg';

const WeatherCardControl: FC = () => {
  const { handleAddSearch, handleOnSubmit, isActive } = useWeatherCardControl();

  return (
    <WeatherCardWrapper>
      {isActive ? (
        <AddWeatherCityWrapper>
          {/* <SpinnerWrapper>*/}
          {/*   <Spinner>*/}
          {/*     <img src={SpinnerIcon} />*/}
          {/*   </Spinner>*/}
          {/* </SpinnerWrapper>*/}

          <SearchInput>
            <Form onSubmit={handleOnSubmit}>
              <Text
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
              />

              <button type="submit">
                <SearchIconWrapper src={SearchIcon} />
              </button>
            </Form>
          </SearchInput>
        </AddWeatherCityWrapper>
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
