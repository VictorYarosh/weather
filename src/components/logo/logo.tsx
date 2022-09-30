import React from 'react';

import { LinksImg, LogoTxt } from './logo-styled';
import { Links } from '../navbar/navbar.styled';
import LogoSrc from '../../images/logo.svg';

const Logo = () => {
  return (
    <Links>
      <LinksImg src={LogoSrc} />
      <LogoTxt>Weather by VicBox</LogoTxt>
    </Links>
  );
};

export default Logo;
