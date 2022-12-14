import { useState } from 'react';

const useWeather = () => {
  const [isLoading, setLoading] = useState(false);

  return { isLoading };
};

export default useWeather;
