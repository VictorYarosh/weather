export interface CitiesProps {
  setCities: (value: string[]) => void;
  cities: string[];
}

export interface WeatherCardProps {
  city: string;
  index: number;
}
