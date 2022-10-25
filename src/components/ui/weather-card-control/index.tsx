import React from 'react';

import {
  AddNewButton,
  AddNewWeather,
  PlusIcon,
  AddDescription
} from './weather-card-control.styled';
import { WeatherCardWrapper } from '../weather-card/weather-card.styled';
import Plus from '../../../assets/icons/plus.svg';

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
