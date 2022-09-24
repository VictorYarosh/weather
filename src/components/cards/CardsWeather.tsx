import React from "react";
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
import useFetch from "../../hooks/use-weather";


const CardsWeather = () => {
  const {dateBuilder,data,isLoading} = useFetch(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`);

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
