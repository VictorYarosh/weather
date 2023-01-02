import { useContext, useState } from 'react';

import { CardsContext } from '../../complex/weather/cards-context';

const useWeatherCardControl = () => {
  const [isActive, setIsActive] = useState(false);
  const [loadingCity, setLoadingCity] = useState(true);
  const { setCities, cities } = useContext(CardsContext);

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
    isActive
  };
};
export default useWeatherCardControl;
