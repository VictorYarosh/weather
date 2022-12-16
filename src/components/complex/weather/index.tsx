import React, { useState } from 'react';

import { WeatherWrapper } from './weather.styled';
import useWeather from './use-weather';
import WeatherCard from '../../ui/weather-card';
import WeatherCardControl from '../../ui/weather-card-control';
import {
  Spinner,
  SpinnerWrapper
} from '../../ui/weather-card-control/weather-card-control.styled';
import SpinnerIcon from '../../../assets/images/spinner.svg';

export const Weather = () => {
  const [cities, setCities] = useState<string[]>(['Kyiv']);
  const { isLoading } = useWeather();

  return (
    <WeatherWrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner>
            <img src={SpinnerIcon} />
          </Spinner>
        </SpinnerWrapper>
      ) : (
        <>
          {cities.map((city, index) => {
            return (
              <WeatherCard
                key={`${city}-${index}`}
                city={city}
                setCities={setCities}
              />
            );
          })}
          <WeatherCardControl setCities={setCities} cities={cities} />
        </>
      )}
    </WeatherWrapper>
  );
};
