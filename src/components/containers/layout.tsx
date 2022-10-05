import React, { FC } from 'react';
import styled from 'styled-components';
import { LayoutProps } from './types';

import NavBar from '../ui/navbar';

export const LayoutStyled = styled.div``;

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <NavBar />
    {children}
  </LayoutStyled>
);
