import { useContext, useState } from 'react';
import { CardsContext } from '../../complex/weather/cards-context';

const useWeatherCardControl = () => {
  const [loadingCity, setLoadingCity] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { setCities, cities } = useContext(CardsContext);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleOnSubmit = ({ values }: any) => {
    // axios.get().then(response) => {
    //
    // };
    setCities([...cities, values.search]);
    setIsActive(false);
  };

  return {
    handleAddSearch,
    handleOnSubmit,

    loadingCity,
    isActive,
    isLoading
  };
};
export default useWeatherCardControl;
