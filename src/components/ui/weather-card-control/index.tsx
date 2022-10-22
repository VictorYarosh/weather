import React from 'react';
import {
  AddDescription,
  AddNewButton,
  AddNewWeather,
  PlusIcon
} from './weather-card-control.styled';
import Plus from '../../../assets/icons/plus.svg';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';

const WeatherCardControl = () => {
  return (
    <WeatherCardWrapper>
      <AddNewButton>
        <AddNewWeather>
          <PlusIcon src={Plus} />
        </AddNewWeather>
        <AddDescription>Add new location</AddDescription>
      </AddNewButton>
    </WeatherCardWrapper>
  );
};

export default WeatherCardControl;
