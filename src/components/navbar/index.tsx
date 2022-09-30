import React from 'react';

import { NavBar, Links } from './navbar.styled';
import { LinksPage } from './navbar.styled';
import Logo from '../logo/logo';

const Navbar = () => {
  return (
    <NavBar>
      <Logo />
      <Links>
        <LinksPage>GitHub</LinksPage>
        <LinksPage>About</LinksPage>
      </Links>
    </NavBar>
  );
};

export default Navbar;
