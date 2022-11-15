import React, { FC, useState } from 'react';

import { WeatherWrapper } from './weather.styled';
import WeatherCard from '../../ui/weather-card';
import WeatherCardControl from '../../ui/weather-card-control';

export const Weather: FC = () => {
  const [cities, setCities] = useState<string[]>(['Kyiv']);
  const [newCites, setNewCites] = useState<string[]>(cities);

  return (
    // add React Context with loading state
    // if (isLoading) {
    //   return <span>Loading...</span>;
    // }
    <WeatherWrapper>
      {cities.map((city, index) => {
        return <WeatherCard key={`${city}-${index}`} city={city} />;
      })}
      {newCites.map((newCity, index) => {
        return (
          <WeatherCardControl key={`${newCity}-${index}`} newCity={newCity} />
        );
      })}
    </WeatherWrapper>
  );
};
