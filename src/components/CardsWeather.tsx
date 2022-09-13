import React, { useState } from "react";
import styled from "styled-components";
import SunIcon from "../images/sunny.png";

const CardLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: blueviolet;
  width: 100%;
  height: 100%;
  padding: 60px 40px;

  div {
    width: 450px;
    height: 575px;
    border-radius: 50px;
    background-color: purple;
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

const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 20px;

  img {
    width: 100px;
    height: 100px;
    position: relative;
    margin-right: 30px;
  }
`;

const Title = styled.div`
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  position: relative;

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
  }
`;

const Temperature = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-size: 100px;
    font-weight: 400;
    line-height: 40px;
  }
`;

type Props = {};

const CardsWeather: React.FC<Props> = () => {
  const [clickedButton, setClickedButton] = useState("");

  return (
    <>
      <CardLeft>
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
        <WeatherIcon>
          <img src={SunIcon} />
          <Title>
            <p>Valle de Angeles, HN</p>
            <span>Monday 01/17/2022</span>
          </Title>
        </WeatherIcon>
      </CardLeft>
    </>
  );
};

export default CardsWeather;
