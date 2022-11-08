import axios from 'axios';
import { useState, useEffect } from 'react';
// import {
//   IoMdThunderstorm,
//   IoMdSearch,
//   IoMdSunny,
//   IoMdRainy,
//   IoMdSnow,
//   IoMdCloud
// } from 'react-icons/io';
// import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs';
// import { ImSpinner8 } from 'react-icons/im';
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

  // let icon;
  // console.log(data.weather[0].main);
  //
  // switch (data.weather[0].main) {
  //   case 'Clouds': {
  //     icon = <IoMdCloud />;
  //     break;
  //   }
  //   case 'Haze': {
  //     icon = <BsCloudHaze2Fill />;
  //     break;
  //   }
  //   case 'Rain': {
  //     icon = <IoMdRainy />;
  //     break;
  //   }
  //   case 'Clear': {
  //     icon = <IoMdSunny />;
  //     break;
  //   }
  //   case 'Drizzle': {
  //     icon = <BsCloudDrizzleFill />;
  //     break;
  //   }
  //   case 'Snow': {
  //     icon = <IoMdSnow />;
  //     break;
  //   }
  //   case 'Thunderstorm': {
  //     icon = <IoMdThunderstorm />;
  //     break;
  //   }
  //   default: {
  //   }
  // }

  return { dateBuilder, data, isLoading };
};

export default useWeatherCard;
