import axios from 'axios';
import { useState, useEffect } from 'react';
import { WeatherCardProps } from './types';
import { weather } from './const';
import { api } from '../../../const';
import { dateBuilder } from '../../../utils';

const useWeatherCard = ({ city }: WeatherCardProps) => {
  const [data, setData] = useState(weather);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `${api.base}weather?q=${city},ua&units=metric&APPID=${api.key}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getWeather().catch((error) => {
      console.error(error);
    });
  }, []);

  return { dateBuilder, data, isLoading };
};

export default useWeatherCard;
