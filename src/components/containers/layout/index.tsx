import React, { FC } from 'react';

import { LayoutProps } from './types';
import { LayoutStyled } from './layout.styled';

import NavBar from '../../ui/navbar';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <NavBar />
    {children}
  </LayoutStyled>
);
