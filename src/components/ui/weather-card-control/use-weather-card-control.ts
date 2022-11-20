import { useState } from 'react';
import { WeatherCardControlProps } from './types';

const useWeatherCardControl = ({
  setCities,
  cities
}: WeatherCardControlProps) => {
  const [loadingCity, setLoadingCity] = useState();
  const [isActive, setIsActive] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleAddWeatherCity = () => {
    setCities(cities);
  };

  return {
    handleAddSearch,
    handleAddWeatherCity,
    loadingCity,
    isActive
  };
};
export default useWeatherCardControl;
