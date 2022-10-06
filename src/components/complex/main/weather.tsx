import React from 'react';

import { WeatherWrapper } from './weather-wrapper.styled';
import WeatherCard from '../../ui/weather-card';
import WeatherCarAdd from '../../ui/weather-card-add';

const Weather = () => {
  return (
    <WeatherWrapper>
      <WeatherCard />
      <WeatherCarAdd />
    </WeatherWrapper>
  );
};
export default Weather;
