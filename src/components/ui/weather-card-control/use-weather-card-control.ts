import { useState } from 'react';
import { UseWeatherCardControlProps } from './types';

const useWeatherCardControl = ({
  setCities,
  cities
}: UseWeatherCardControlProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleOnSubmit = ({ values }: any) => {
    console.log([...cities, values.search]);
    setCities([...cities, values.search]);
    setIsActive(false);
  };

  return {
    handleAddSearch,
    handleOnSubmit,

    isActive,
    setCities,
    cities
  };
};
export default useWeatherCardControl;
