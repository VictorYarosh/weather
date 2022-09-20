import React, { useEffect, useState } from "react";
import SunIcon from "../images/sunny.png";
import IconEye from "../images/eye.png";
import IconWater from "../images/Vector.png";
import IconTemperature from "../images/temperature.png";
import IconWindy from "../images/windy.png";
import styled from "styled-components";

const Card = styled.div`
  width: 450px;
  height: 575px;
  margin: 80px 0;
  border-radius: 50px;
  background-color: #533489;

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

    @media (max-width: 375px) {
      margin: 0;
    }
  }
`;

const Title = styled.div`
  color: white;
  font-size: 18px;
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

  @media (max-width: 375px) {
    margin: 0;
  }
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;

  div {
    p {
      font-size: 50px;
      font-weight: 500;
      line-height: 35px;

      @media (max-width: 425px) {
        font-size: 45px;
      }
    }
  }
  span {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;

    @media (max-width: 425px) {
      font-size: 30px;
    }
  }
`;

const FooterCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  padding: 20px 0;

  div {
    :after {
      border-right: 2px solid white;
      bottom: 0;
      content: "";
      position: relative;
      top: -34px;
      left: -32px;

      @media (max-width: 425px) {
        left: -17px;
      }
      @media (max-width: 375px) {
        left: -10px;
      }
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
    left: 165px;

    @media (max-width: 425px) {
      left: 135px;
    }
    @media (max-width: 375px) {
      left: 130px;
    }
  }
`;

const api = {
  key: "717d96b0ffbd98f7df5938fac7f277c6",
  base: "https://api.openweathermap.org/data/2.5/",
};

// type Props = {};

function CardsWeather() {
  const dateBuilder = (d: Date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const [data, setData] = useState({
    main: { temp: NaN, feels_like: NaN, humidity: NaN },
    visibility: null,
    name: null,
    sys: { country: null },
    wind: { speed: NaN, deg: NaN },
  });

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

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
          <p>Weather</p>
          <div>{dateBuilder(new Date())}</div>
        </Title>
      </WeatherIcon>

      <Temperature>
        <div>
          <p>{Math.trunc(data.main.temp)}°C</p>
        </div>
        <span>
          {data.name},{data.sys.country}
        </span>
        <div></div>
      </Temperature>

      <FooterCard>
        <div>
          <span>
            <img src={IconEye} />
            <p>{data.visibility} km</p>
          </span>
          <span>
            <img src={IconWater} />
            <p>{data.main.humidity}km</p>
          </span>
        </div>
        <div>
          <span>
            <img src={IconTemperature} />
            <p>{Math.trunc(data.main.feels_like)}°C</p>
          </span>
          <span>
            <img src={IconWindy} />
            <p>{data.wind.speed}km</p>
          </span>
        </div>
      </FooterCard>
    </Card>
  );
}

export default CardsWeather;
