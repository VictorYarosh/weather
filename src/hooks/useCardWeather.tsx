import axios from 'axios';
import { useState, useEffect } from 'react';
import { api, weather } from '../components/cards/const';
import { dateBuilder } from '../utils';

const useCardWeather = () => {
  const [data, setData] = useState(weather);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getWeather().then((r) => null);
  }, []);

  return { dateBuilder, data, isLoading };
};

export default useCardWeather;
