export interface WeatherCardProps {
  city: string;
  setCities: (value: string[]) => void;
  index: number;
  cities: string[];
}
