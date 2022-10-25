import React, { FC } from 'react';

import { LayoutProps } from './types';
import { LayoutStyled } from './layout.styled';
import Navbar from '../../ui/navbar';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <Navbar />
    {children}
  </LayoutStyled>
);
