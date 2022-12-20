import React from 'react';
import { Links, LinksPage, Navbar } from './navbar.styled';
import Logo from '../logo';
import useNavBar from './use-navbar';

const NavBar = () => {
  const { handleOpenNewLinksGitHub, handleOpenNewLinksLinkedIn } = useNavBar();
  return (
    <Navbar>
      <Logo />
      <Links>
        {/*<LinksPage>Home</LinksPage>*/}
        <LinksPage onClick={handleOpenNewLinksGitHub}>GitHub</LinksPage>
        <LinksPage onClick={handleOpenNewLinksLinkedIn}>LinkedIn</LinksPage>
      </Links>
    </Navbar>
  );
};

export default NavBar;
