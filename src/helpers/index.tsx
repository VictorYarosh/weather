export const getWeatherImageName = (weather: string): string => {
  switch (weather) {
    case 'broken clouds':
      return 'cloud.png';
    case 'rain':
      return 'rain.png';
    case 'sunny':
      return 'sun.png';
    case 'snow':
      return 'snow.png';
    case 'thunderstorm':
      return 'thunderstorm.png';
    default:
      return 'unknown.png';
  }
};

export const getFormattedTemperature = (data: number | null) => {
  if (data) {
    return Math.trunc(data);
  }
};
