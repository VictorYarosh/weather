import SunIcon from '../../../assets/icons/sun.png';
import CloudIcon from '../../../assets/icons/cloud.png';
import RainIcon from '../../../assets/icons/rain.png';
import SnowIcon from '../../../assets/icons/snow.png';
import ThunderstormIcon from '../../../assets/icons/thunderstorm.png';
import { useState } from 'react';
import { weather } from './const';

const getIcons = () => {
  const [icons, setIcons] = useState(weather);

  // let icon;
  //  switch () {
  //    case 'Sun': {
  //      icon = 'SunIcon';
  //      break;
  //    }
  //    case 'Clouds': {
  //      icon = 'CloudIcon';
  //      break;
  //    }
  //    case 'Rain': {
  //      icon = 'RainIcon';
  //      break;
  //    }
  //    case 'Snow': {
  //      icon = 'SnowIcon';
  //      break;
  //    }
  //    case 'Thunderstorm': {
  //      icon = 'ThunderstormIcon';
  //      break;
  //    }
  //  }

  return { icons };
};

export default getIcons;
