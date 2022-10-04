import React, { FC } from 'react';
import { LayoutProps } from './types';

import CardWeather from '../ui/weather-card';
import NavBar from '../ui/navbar';
import { LayoutStyled } from '../ui/navbar/navbar.styled';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <NavBar />
    {children}
    <CardWeather />
  </LayoutStyled>
);
