import React from 'react';

import { LogoContainer, LogoImg, LogoName } from './logo-styled';
import LogoSrc from '../../images/logo.svg';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={LogoSrc} />
      <LogoName>Weather by VicBox</LogoName>
    </LogoContainer>
  );
};

export default Logo;
