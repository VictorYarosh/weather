import React from 'react';
import { WeatherWrapper } from './weather-cars.styled';
import WeatherCardAll from '../ui/weather-card-all';
import WeatherCard from '../ui/weather-card';

const Weather = () => {
  return (
    <WeatherWrapper>
      <WeatherCard />
      <WeatherCardAll />
    </WeatherWrapper>
  );
};
export default Weather;
