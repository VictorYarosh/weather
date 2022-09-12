import React, { useState } from 'react';
import styled from 'styled-components';
import LogoSrc from '../images/logo.svg';

const NavBar = styled.nav`
  background-color: purple;
  display: flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  box-shadow: 1px 1px 5px purple;
`;

const Links = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: flex-end;
  margin: 20px 60px;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: end;
`;

const LogoTxt = styled.a`
  padding-left: 40px;
`;

type Props = {};

type Task = {
  label: string;
};

const Navbar: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <NavBar>
      <Links>
        <a>
          <img src={LogoSrc} />
          <LogoTxt>Weather by VicBox</LogoTxt>
        </a>
      </Links>

      <Links>
        <LogoTxt>GitHub</LogoTxt>
        <LogoTxt>About</LogoTxt>
      </Links>
    </NavBar>
  );
};

export default Navbar;
