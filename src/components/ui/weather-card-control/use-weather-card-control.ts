import { useState } from 'react';
import { UseWeatherCardControlProps } from './types';

const useWeatherCardControl = ({
  setCities,
  cities
}: UseWeatherCardControlProps) => {
  const [loadingCity, setLoadingCity] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleOnSubmit = ({ values }: any) => {
    setCities([...cities, values.search]);
    setIsActive(false);
  };

  return {
    handleAddSearch,
    handleOnSubmit,

    loadingCity,
    isActive,
    setCities,
    cities
  };
};
export default useWeatherCardControl;
