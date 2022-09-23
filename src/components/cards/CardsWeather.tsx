import React, { useEffect, useState } from "react";
import {
  BurgerContent, BurgerContentText,
  Card,
  Dropdown,
  DropdownInput, DropdownList,
  DropdownListLi, FooterImg, FooterSub, FooterText, FooterWrapper, Temperature, TemperatureSub, TemperatureWrapper,
  Title,
  TitleSub, TitleWrapper,
  WeatherIcon,
  WeatherImg
} from "./cards-weather-styled";

import {api} from "../../const";
import SunIcon from "../../images/sunny.png";
import IconEye from "../../images/eye.png";
import IconWater from "../../images/Vector.png";
import IconTemperature from "../../images/temperature.png";
import IconWindy from "../../images/windy.png";





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
    visibility: null,
    name: null,
    sys: { country: null },
    wind: { speed: NaN, deg: NaN },
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

  if (isLoading) return <p>Loading...</p>;


  return (
    <Card>
      <Dropdown>
        <DropdownInput type={"checkbox"} />
        <DropdownList>
          <DropdownListLi></DropdownListLi>
          <DropdownListLi></DropdownListLi>
          <DropdownListLi></DropdownListLi>
        </DropdownList>
        <BurgerContent>
          <BurgerContentText>Home</BurgerContentText>
          <BurgerContentText>About</BurgerContentText>
          <BurgerContentText>Contacts</BurgerContentText>
        </BurgerContent>
      </Dropdown>
      <WeatherIcon>
        <WeatherImg src={SunIcon} />
        <TitleWrapper>
          <Title>Valle de Angeles, HN</Title>
          <TitleSub>{dateBuilder(new Date())}</TitleSub>
        </TitleWrapper>
      </WeatherIcon>
      <TemperatureWrapper>
        <>
          <Temperature>{Math.trunc(data.main.temp)}°C</Temperature>
          <TemperatureSub>
            {data.name}, {data.sys.country}
          </TemperatureSub>

          <Title>
           {data.weather.map(({main}) =>
               <span>{main}</span>)}
          </Title>
        </>
      </TemperatureWrapper>
      <FooterWrapper>
        <div>
          <FooterSub>
            <FooterImg src={IconEye} />
            <FooterText>{data.visibility}km</FooterText>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWater} />
            <FooterText>{data.main.humidity}km</FooterText>
          </FooterSub>
        </div>
        <div>
          <FooterSub>
            <FooterImg src={IconTemperature} />
            <p>{Math.trunc(data.main.feels_like)}°C</p>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWindy} />
            <p>{Math.trunc(data.wind.speed)}s</p>
          </FooterSub>
        </div>
      </FooterWrapper>
    </Card>
  );
}

export default CardsWeather;
