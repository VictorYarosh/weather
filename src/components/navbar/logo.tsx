import {Links, LinksImg, LogoTxt} from "./navbar.styled";
import LogoSrc from "../../images/logo.svg";
import React from "react";

const Logo = () => {
    return (
        <Links>
            <LinksImg src={LogoSrc} />
            <LogoTxt>Weather by VicBox</LogoTxt>
        </Links>
    )
}

export default Logo;