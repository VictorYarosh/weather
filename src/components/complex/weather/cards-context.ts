import { createContext } from 'react';
import { CitiesProps } from '../../ui/weather-card/types';

export const CardsContext = createContext<CitiesProps>({
  cities: [],
  setCities: () => null
});
