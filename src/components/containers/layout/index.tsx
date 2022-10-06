import React, { FC } from 'react';

import { LayoutStyled } from './layout.styled';
import NavBar from '../../ui/navbar';
import { LayoutProps } from '../layout/types';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <NavBar />
    {children}
  </LayoutStyled>
);
