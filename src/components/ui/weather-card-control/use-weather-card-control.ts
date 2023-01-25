import { useContext, useState } from 'react';

import axios from 'axios';
import { api } from '../../../const';
import { CardsContext } from '../../complex/weather/cards-context';

const useWeatherCardControl = () => {
  const [isActive, setIsActive] = useState(false);
  const [loadingCity, setLoadingCity] = useState(true);
  const { cities, setCities } = useContext(CardsContext);

  const handleAddSearch = async () => {
    setIsActive(true);
  };

  const handleOnSubmit = ({ values }: any) => {
    try {
      axios.get(
        `${api.base}weather?q=${values.search},ua&units=metric&APPID=${api.key}`
      );
      if (values.search) {
        setCities([...cities, values.search]);
        setIsActive(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleAddSearch,
    handleOnSubmit,

    loadingCity,
    isActive
  };
};
export default useWeatherCardControl;
