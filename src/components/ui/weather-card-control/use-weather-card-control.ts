import { useState } from 'react';
import { WeatherCardControlProps } from './types';

const useWeatherCardControl = (setCities: WeatherCardControlProps) => {
  const [loadingCity, setLoadingCity] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleAddWeatherCity = () => {
    setCities;
  };

  return {
    handleAddSearch,
    handleAddWeatherCity,
    loadingCity,
    isActive
  };
};
export default useWeatherCardControl;
