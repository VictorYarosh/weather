import { SetStateAction, useEffect, useState } from 'react';
import { api } from '../../../const';
import axios from 'axios';

const useSearchWeather = () => {
  const [search, setSearch] = useState(null);
  const [location, setLocation] = useState('Odessa');

  useEffect(() => {
    const url = `${api.base}weather?q=${location},ua&units=metric&APPID=${api.key}`;

    axios.get(url).then((res) => {
      setSearch(res.data);
    });
  }, [location]);

  const handleOnChange = (searchData: SetStateAction<null>) => {
    setSearch(searchData);
  };

  return {
    handleOnChange,
    search
  };
};

export default useSearchWeather;
