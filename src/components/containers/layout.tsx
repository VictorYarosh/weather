import React, { FC } from 'react';
import { LayoutProps } from './types';

import CardWeather from '../ui/weather-card';
import NavBar from '../ui/navbar';
import { LayoutStyled } from '../ui/weather-card/weather-card.styled';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <NavBar />
    {children}
    <CardWeather />
  </LayoutStyled>
);
