import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../../const';

const useWeatherCardControl = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  useEffect(() => {
    const getWeatherCity = async () => {
      try {
        const response = await axios.get(
          `${api.base}weather?q=${location},ua&units=metric&APPID=${api.key}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getWeatherCity().catch((error) => {
      console.error(error);
    });
  }, [location]);

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log(inputValue);
    e.preventDefault();
  };

  return {
    handleInput,
    handleSubmit,
    handleAddSearch,
    inputValue,
    isActive,
    isLoading,
    data
  };
};
export default useWeatherCardControl;
