import { useState } from 'react';
import { UseWeatherCardControlProps } from './types';

const useWeatherCardControl = ({
  setCities,
  cities
}: UseWeatherCardControlProps) => {
  const [loadingCity, setLoadingCity] = useState();
  const [isActive, setIsActive] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleChange = (setCities: () => void) => {
    setCities();
  };
  const handleClick = () => {};

  return {
    handleAddSearch,
    handleChange,
    loadingCity,
    isActive,
    setCities,
    cities
  };
};
export default useWeatherCardControl;
