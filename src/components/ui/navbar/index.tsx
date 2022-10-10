import React from 'react';
import { Links, LinksPage, Navbar } from './navbar.styled';
import Logo from '../logo';

const NavBar = () => {
  return (
    <Navbar>
      <Logo />
      <Links>
        <LinksPage>GitHub</LinksPage>
        <LinksPage>About</LinksPage>
      </Links>
    </Navbar>
  );
};

export default NavBar;
