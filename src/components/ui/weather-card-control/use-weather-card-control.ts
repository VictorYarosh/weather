import { useContext, useState } from 'react';

import axios from 'axios';
import { CardsContext } from '../../complex/weather/cards-context';
import { api } from '../../../const';

const useWeatherCardControl = () => {
  const [isActive, setIsActive] = useState(false);
  const [loadingCity, setLoadingCity] = useState(true);
  const { cities, setCities } = useContext(CardsContext);
  const [animate, setAnimate] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleOnSubmit = ({ values }: any) => {
    const addWeather = async () => {
      try {
        await axios.get(
          `${api.base}weather?q=${values.search},ua&units=metric&APPID=${api.key}`
        );
        setCities([...cities, values.search]);
        setIsActive(false);
      } catch (error) {
        console.error(error);
      }
    };
    addWeather().catch((error) => {
      console.error(error);
    });

    if (values.search === '') {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  };

  return {
    handleAddSearch,
    handleOnSubmit,

    loadingCity,
    isActive,
    animate
  };
};
export default useWeatherCardControl;
