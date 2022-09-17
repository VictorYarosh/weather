import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SunIcon from "../images/sunny.png";
import IconEye from "../images/eye.png";
import IconWater from "../images/Vector.png";
import IconTemperature from "../images/temperature.png";
import IconWindy from "../images/windy.png";

const api = {
  key: "717d96b0ffbd98f7df5938fac7f277c6",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Card = styled.div`
  width: 450px;
  height: 575px;
  margin: 80px 0;
  border-radius: 50px;
  background-color: purple;

  @media (max-width: 425px) {
    width: 80%;
  }
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;

  input {
    display: none;
    margin: 50px -30px;
  }
  ul {
    color: #fff;
    padding: 5px 35px;
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
  line-height: 27px;
  margin: 20px 0;

  p {
    margin: 0;
  }

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
  }
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 45px 0 0;
  position: relative;
  p {
    margin: auto;
    font-size: 120px;
    font-weight: 400;
    line-height: 10px;

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  div {
    input {
      margin: 50px 0 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
    p {
      padding-top: 20px;
      text-align: center;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    }
    button {
      border-radius: 20%;
      border: 1px solid red;
      height: 32px;
      color: white;
      background-color: purple;
      box-shadow: blueviolet;
      cursor: pointer;
    }
  }
`;

const FooterCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  padding: 60px 0;

  div {
    :after {
      border-right: 2px solid white;
      bottom: 0;
      content: "";
      position: relative;
      top: -34px;
      left: -4px;
    }
    span {
      display: flex;

      img {
        padding: 13px 15px;
        width: 24px;
        height: 24px;

        @media (max-width: 425px) {
          width: 20px;
          height: 20px;
        }
      }

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }
  }

  div:not(:last-child):after {
    border-right: 2px solid white;
    bottom: 0;
    content: "";
    position: relative;
    top: -83px;
    left: 200px;

    @media (max-width: 425px) {
      left: 154px;
    }
    @media (max-width: 375px) {
      left: 140px;
    }
  }
`;

type Props = {};

const CardsWeather: React.FC<Props> = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const searchPressed = () => {
    setisLoading(true);
    fetch(`${api.base}weather?q={setisLoading}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.weather);
        setisLoading(false);
      });
  };
  useEffect(() => {
    searchPressed();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Card>
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
      <Temperature>
        <p>
          {weather}
          <p>°C</p>
        </p>
      </Temperature>
      <FooterCard>
        <div>
          <span>
            <img src={IconEye} />
            <p>Visibility 10km</p>
          </span>
          <span>
            <img src={IconWater} />
            <p>Humidity 10km</p>
          </span>
        </div>
        <div>
          <span>
            <img src={IconTemperature} />
            <p>Feels like 10km</p>
          </span>
          <span>
            <img src={IconWindy} />
            <p>Wind 10km</p>
          </span>
        </div>
      </FooterCard>
    </Card>
  );
};

export default CardsWeather;
