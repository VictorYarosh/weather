import axios from 'axios';
import { useState, useEffect } from 'react';

import { api } from '../const';
import { dateBuilder } from '../utils';
import { weather } from '../components/ui/weather-card/const';

const useHookWeather = () => {
  const [data, setData] = useState(weather);
  const [isLoading, setLoading] = useState(false);
  // const [location, setlocation] = useState('')

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
    getWeather().catch((error) => {
      console.error(error);
    });
  }, []);

  return { dateBuilder, data, isLoading };
};

export default useHookWeather;
