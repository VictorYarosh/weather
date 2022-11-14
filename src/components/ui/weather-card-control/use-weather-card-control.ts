import { useState } from 'react';

const useWeatherCardControl = () => {
  const [data, setData] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  return {
    handleAddSearch,
    isActive,
    isLoading,
    data
  };
};
export default useWeatherCardControl;
