import { useState, useEffect } from 'react';
import axios from 'axios';
import { api, weather } from '../const';
import { dateBuilder } from '../utils';

const useCartWeather = (url: string) => {
  const [data, setData] = useState(weather);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { dateBuilder, data, isLoading, error };
};

export default useCartWeather;
