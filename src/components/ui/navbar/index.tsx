import React from 'react';
import { Links, LinksPage, Navbar } from './navbar.styled';
import Logo from '../logo';

const NavBar = () => {
  return (
    <Navbar>
      <Logo />
      <Links>
        <LinksPage
          onClick={() =>
            window.open('https://github.com/VictorYarosh/weather', '_blank')
          }
        >
          GitHub
        </LinksPage>
        <LinksPage
          onClick={() =>
            window.open(
              'https://ua.linkedin.com/in/victor-yarosh-801b45212/uk?trk=people-guest_people_search-card',
              '_blank'
            )
          }
        >
          LinkedIn
        </LinksPage>
      </Links>
    </Navbar>
  );
};

export default NavBar;
