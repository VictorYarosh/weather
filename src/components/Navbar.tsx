import React, { useState } from "react";
import styled from "styled-components";
import LogoSrc from "../images/logo.svg";

const NavBar = styled.nav`
  background-color: purple;
  display: flex;
  justify-content: space-between;
  height: auto;
  background-image: linear-gradient(to bottom right, #6447b5, #9881da);

  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
const Links = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  @media (max-width: 425px) {
    margin: 0;
    font-size: 15px;
  }
`;
const LinksImg = styled.img`
    padding: 10px 10px;
`;
const LogoTxt = styled.a`
  margin: 20px 60px;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  @media (max-width: 425px) {
    margin: 15px 25px;
    line-height: 22px;
    font-size: 15px
  }
  @media (max-width: 425px) {
    font-size: 13px
  }
`;
const LinksPage = styled.div`
  padding: 20px 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 12px;
  }
`;

type Task = {
  label: string;
};

const Navbar: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <NavBar>
      <Links>
        <LinksImg src={LogoSrc} />
        <LogoTxt>Weather by VicBox</LogoTxt>
      </Links>
      <Links>
        <LinksPage>GitHub</LinksPage>
        <LinksPage>About</LinksPage>
      </Links>
    </NavBar>
  );
};

export default Navbar;
