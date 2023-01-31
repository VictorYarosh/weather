import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

import { WeatherCardProps } from './types';
import { weather } from './const';
import { CardsContext } from '../../complex/weather/cards-context';
import { api } from '../../../const';
import { dateBuilder } from '../../../utils';

const useWeatherCard = ({ city, index }: WeatherCardProps) => {
  const [data, setData] = useState(weather);
  const [isLoading, setLoading] = useState(true);
  const { setCities, cities } = useContext(CardsContext);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `${api.base}weather?q=${city},ua&units=metric&APPID=${api.key}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getWeather().catch((error) => {
      console.error(error);
    });
  }, []);

  const handleDeleteCard = () => {
    const removeCityIndex = index;

    const filteredCities = cities.filter((city, index) => {
      return index !== removeCityIndex;
    });
    setCities(filteredCities);
  };

  return { dateBuilder, handleDeleteCard, data, isLoading };
};

export default useWeatherCard;
