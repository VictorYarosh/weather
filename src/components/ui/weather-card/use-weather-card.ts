import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  IoMdThunderstorm,
  IoMdSunny,
  IoMdRainy,
  IoMdSnow,
  IoMdCloud
} from 'react-icons/io';
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs';

import { WeatherCardProps } from './types';
import { weather } from './const';
import { api } from '../../../const';
import { dateBuilder } from '../../../utils';

const useWeatherCard = ({ city }: WeatherCardProps) => {
  const [data, setData] = useState(weather);
  const [isLoading, setLoading] = useState(false);
  const [getIcons, setGetIcons] = useState('');

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

  // const icons = (data.weather[0].main) => {
  //
  //   switch () {
  //     case 'Clouds': {
  //       return <IoMdCloud/>
  //     }
  //     case 'Haze': {
  //       return <BsCloudHaze2Fill />;
  //     }
  //     case 'Rain': {
  //       return <IoMdRainy />;
  //     }
  //     case 'Clear': {
  //       return <IoMdSunny />;
  //     }
  //     case 'Drizzle': {
  //       return <BsCloudDrizzleFill />;
  //     }
  //     case 'Snow': {
  //       return <IoMdSnow />;
  //     }
  //     case 'Thunderstorm': {
  //       return <IoMdThunderstorm />;
  //     }
  //   }
  // };

  return { dateBuilder, data, isLoading };
};

export default useWeatherCard;
