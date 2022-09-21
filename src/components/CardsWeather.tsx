import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SunIcon from "../images/sunny.png";
import IconEye from "../images/eye.png";
import IconWater from "../images/Vector.png";
import IconTemperature from "../images/temperature.png";
import IconWindy from "../images/windy.png";

const Card = styled.div`
  width: 450px;
  height: 575px;
  margin: 80px 0;
  border-radius: 50px;
  background-color: #5639a8;

  @media (max-width: 425px) {
    width: 375px;
    height: 520px;
  }
  @media (max-width: 375px) {
    width: 320px;
    height: 500px;
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

    @media (max-width: 425px) {
      margin-right: 18px;
    }
  }
`;

const Title = styled.div`
  color: white;
  font-weight: 400;
  line-height: 27px;
  margin: 20px 0;

  p {
    margin: 0;
    font-size: 25px;
    font-weight: 600;

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    margin: 10px 0px 0px -15px;
  }
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;

  p {
    line-height: 10px;
    font-size: 70px;
    font-weight: 500;
  }
  span {
    padding: 20px 0;
    font-size: 24px;
    font-weight: 400;
  }
`;

const FooterCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;

  div {
    :after {
      border-right: 2px solid white;
      bottom: 0;
      content: "";
      position: relative;
      top: -34px;
      left: -43px;

      @media (max-width: 425px) {
        left: -32px;
      }
      @media (max-width: 375px) {
        left: -14px;
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
    left: 160px;

    @media (max-width: 425px) {
      left: 135px;
    }
  }
`;

const api = {
  key: "717d96b0ffbd98f7df5938fac7f277c6",
  base: "https://api.openweathermap.org/data/2.5/",
};

function CardsWeather() {
  const dateBuilder = (d: Date) => {
    const months = [
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
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const [data, setData] = useState({
    main: { temp: NaN, feels_like: NaN, humidity: NaN },
    wind: { speed: NaN, deg: NaN },
    visibility: NaN,
    name: null,
    sys: { country: null },
    weather: [{ main: null, description: null }],
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

  if (isLoading) return <p>Lodiang...</p>;
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
          <p>Valle de Angeles, HN</p>
          <div>{dateBuilder(new Date())}</div>
        </Title>
      </WeatherIcon>

      <Temperature>
        <>
          <p>{Math.trunc(data.main.temp)}°C</p>
          <span>
            {data.name}, {data.sys.country}
          </span>
          <div>
            {data.weather.map(({ description }) => (
              <span>{description}</span>
            ))}
          </div>
        </>
      </Temperature>

      <FooterCard>
        <div>
          <span>
            <img src={IconEye} />
            <p>{data.visibility}km</p>
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
            <p>{Math.trunc(data.wind.speed)}s</p>
          </span>
        </div>
      </FooterCard>
    </Card>
  );
}

export default CardsWeather;
