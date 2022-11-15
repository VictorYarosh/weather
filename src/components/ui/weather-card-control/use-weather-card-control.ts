import { SetStateAction, useEffect, useState } from 'react';
import { api } from '../../../const';
import axios from 'axios';

const useWeatherCardControl = () => {
  const [data, setData] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const url = `${api.base}weather?q=${location},ua&units=metric&APPID=${api.key}`;

    axios.get(url).then((res) => {
      setSearch(res.data);
    });
  }, [location]);

  const handleOnChange = (searchData: SetStateAction<null>) => {
    setSearch(searchData);
    setLocation(true);
  };

  const handleAddSearch = () => {
    setIsActive(true);
  };

  return {
    handleAddSearch,
    handleOnChange,
    isActive,
    isLoading,
    data,
    search
  };
};
export default useWeatherCardControl;
