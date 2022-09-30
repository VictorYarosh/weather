import { days, months } from './components/cards/const';

export const dateBuilder = (d: Date) => {
  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export const getFormattedTemperature = (data: number | null) => {
  if (data) {
    return Math.trunc(data);
  }
};
