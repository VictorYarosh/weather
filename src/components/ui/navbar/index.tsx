import React from 'react';
import { Links, LinksPage, Navbar } from './navbar.styled';
import useNavBar from './use-navbar';
import Logo from '../logo';

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
