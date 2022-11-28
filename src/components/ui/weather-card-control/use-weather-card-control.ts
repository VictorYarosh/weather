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

  const handleOnChange = (values: any) => {
    console.log({ values });
    setCities([cities, values.search]);
  };

  return {
    handleAddSearch,
    handleOnChange,
    loadingCity,

    isActive,
    setCities,
    cities
  };
};
export default useWeatherCardControl;
