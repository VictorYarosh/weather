import { useState } from 'react';

const useWeather = () => {
  const [isLoading] = useState(false);

  return { isLoading };
};

export default useWeather;
