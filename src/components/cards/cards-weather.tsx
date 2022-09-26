import React from "react";
import {
  Card,
  FooterImg, FooterSub, FooterText, FooterWrapper, Temperature, TemperatureSub, TemperatureWrapper,
  Title,
  TitleSub, TitleWrapper,
  WeatherIcon,
  WeatherImg
} from "./cards-weather.styled";
import DropdownMemu from "./commons/dropdown";
import {api, weatherAll} from "../../const";
import SunIcon from "../../images/sunny.png";
import IconEye from "../../images/eye.png";
import IconWater from "../../images/Vector.png";
import IconTemperature from "../../images/temperature.png";
import IconWindy from "../../images/windy.png";
import useCartWeather from "../../hooks/use-weather";




const CartWeather = () => {
  const {dateBuilder,data,isLoading} = useCartWeather(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`);

  if (isLoading) return <p>Loading...</p>;
  return (
    <Card>
      <DropdownMemu />
      <WeatherIcon>
        <WeatherImg src={SunIcon} />
        <TitleWrapper>
          <Title>Valle de Angeles, HN</Title>
          <TitleSub>{dateBuilder(new Date())}</TitleSub>
        </TitleWrapper>
      </WeatherIcon>
      <TemperatureWrapper>
          <Temperature>{Math.trunc(data.weatherAll.main.temp)}°C</Temperature>
          <TemperatureSub>
            {data.weatherAll.name}, {data.weatherAll.sys.country}
          </TemperatureSub>

          <Title>
           {data.weatherAll.weather.map(({main}) =>
               <span>{main}</span>)}
          </Title>
      </TemperatureWrapper>
      <FooterWrapper>
        <div>
          <FooterSub>
            <FooterImg src={IconEye} />
            <FooterText>{weatherAll.visibility}km</FooterText>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWater} />
            <FooterText>{data.weatherAll.main.humidity}km</FooterText>
          </FooterSub>
        </div>
        <div>
          <FooterSub>
            <FooterImg src={IconTemperature} />
            <p>{Math.trunc(data.weatherAll.main.feels_like)}°C</p>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWindy} />
            <p>{Math.trunc(data.weatherAll.wind.speed)}s</p>
          </FooterSub>
        </div>
      </FooterWrapper>
    </Card>
  );
}

export default CartWeather;
