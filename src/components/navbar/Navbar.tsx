import React, { useState } from "react";
import LogoSrc from "../../images/logo.svg"
import {NavBar} from "./styled";
import {Links} from "./styled"
import {LinksImg} from "./styled"
import {LogoTxt} from "./styled"
import {LinksPage} from "./styled"


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
