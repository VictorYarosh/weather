import Cloud from '../../../assets/icons/cloud.png';
import Rain from '../../../assets/icons/rain.png';
import Sun from '../../../assets/icons/sun.png';
import Snow from '../../../assets/icons/snow.png';
import Thunderstorm from '../../../assets/icons/thunderstorm.png';
import Placeholder from '../../../assets/icons/unknown.png';

export const getWeatherImageName = (weather: string): string => {
  switch (weather) {
    case 'cloud':
      return Cloud;
    case 'rain':
      return Rain;
    case 'sunny':
      return Sun;
    case 'snow':
      return Snow;
    case 'thunderstorm':
      return Thunderstorm;
    default:
      return Placeholder;
  }
};
