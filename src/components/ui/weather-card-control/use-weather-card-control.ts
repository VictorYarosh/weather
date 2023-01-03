import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { CardsContext } from '../../complex/weather/cards-context';
import { api } from '../../../const';

const useWeatherCardControl = () => {
  const [isActive, setIsActive] = useState(false);
  const [loadingCity, setLoadingCity] = useState(true);
  const { setCities, cities } = useContext(CardsContext);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleOnSubmit = ({ values }: any) => {
    useEffect(() => {
      const searchWeather = async () => {
        try {
          await axios.get(
            `${api.base}weather?q=${cities},ua&units=metric&APPID=${api.key}`
          );
          setCities([...cities, values.search]);
          setIsActive(false);
        } catch (error) {
          console.error(error);
        }
      };
      searchWeather().catch((error) => {
        console.error(error);
      });
    }, []);
  };

  return {
    handleAddSearch,
    handleOnSubmit,

    loadingCity,
    isActive
  };
};
export default useWeatherCardControl;
