import React from 'react';

import { WeatherWrapper } from './weather.styled';
import WeatherCard from '../../ui/weather-card';
import WeatherCardControl from '../../ui/weather-card-control';

export const Weather = () => {
  return (
    <WeatherWrapper>
      <WeatherCard city="Kyiv" />
      <WeatherCardControl />
    </WeatherWrapper>
  );
};
