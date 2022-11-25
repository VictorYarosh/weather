export interface WeatherCardControlProps {
  setCities: (value: string[]) => void;
  cities: string[];
}
export type UseWeatherCardControlProps = Pick<
  WeatherCardControlProps,
  'setCities' | 'cities'
>;
