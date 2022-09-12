import React, { useState } from "react";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  justify-content: center;
  background-color: blueviolet;
  width: 100%;
  height: 100%;
  padding: 60px 0;

  div {
    width: 450px;
    height: 575px;
    border-radius: 50px;
    background-color: purple;
    margin-right: 40px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: end;
  input {
    display: none;
    margin: 50px -30px;
  }
  ul {
    color: #fff;
    padding: 30px 40px;
    cursor: pointer;

    li {
      background: none repeat scroll 0 0 #fff;
      height: 7px;
      width: 7px;
      line-height: 0;
      list-style: none outside none;
      margin-right: 15px;
      margin-top: 3px;
      vertical-align: top;
      border-radius: 50%;
      pointer-events: none;
    }
  }
`;

const BurgerContent = styled.div`
  display: none;
  position: absolute;
  background-color: purple;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-width: 100px;
  max-height: 30%;

  a {
    position: relative;
    color: white;
    padding: 17px;
    text-decoration: none;
    display: block;
    text-align: center;
  }
`;

const SunIconStyled = styled.a`
  img {
    width: 80px;
    height: 80px;
    background-color: purple;
  }
`;

type Props = {};

const CardsWeather: React.FC<Props> = () => {
  const [clickedButton, setClickedButton] = useState("");

  return (
    <Cards>
      <Dropdown>
        <input type={"checkbox"} />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <BurgerContent>
          <a>Home</a>
          <a>About</a>
          <a>Contacts</a>
        </BurgerContent>
      </Dropdown>
    </Cards>
  );
};

export default CardsWeather;
