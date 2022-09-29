import React from "react";
import {
  Card,
  FooterImg, FooterSub, FooterText, FooterWrapper, Temperature, TemperatureSub, TemperatureWrapper,
  Title,
  TitleSub, TitleWrapper,
  WeatherIcon,
  WeatherImg
} from "./cards-weather.styled";
import DropdownMenu from "./commons/dropdown";
import {api} from "../../const";
import SunIcon from "../../images/sunny.png";
import IconEye from "../../images/eye.png";
import IconWater from "../../images/Vector.png";
import IconTemperature from "../../images/temperature.png";
import IconWindy from "../../images/windy.png";
import useCartWeather from "../../hooks/useCartWeather";
import {getFormattedTemperature} from "../../utils";



const CartWeather = () => {
  const {dateBuilder,isLoading,data,error} = useCartWeather(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`);


  if (isLoading) return <p>Loading...</p>
  if (error) console.log(error)
  return (
    <Card>
        <DropdownMenu />
        <WeatherIcon>
            <WeatherImg src={SunIcon} />
            <TitleWrapper>
                <Title>Valle de Angeles, HN</Title>
                <TitleSub>{dateBuilder(new Date())}</TitleSub>
            </TitleWrapper>
        </WeatherIcon>
        <TemperatureWrapper>
            <Temperature>
                {getFormattedTemperature(data.main.temp)}°C
            </Temperature>
            <TemperatureSub>
               {data.name}, {data.sys.country}
            </TemperatureSub>
            <Title>
                {data.weather.map(({main}) => <span>{main}</span>)}
            </Title>
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
                    <p>{getFormattedTemperature(data.main.feels_like)}°C</p>
                </FooterSub>
                <FooterSub>
                    <FooterImg src={IconWindy} />
                    <p>{getFormattedTemperature(data.wind.speed)}s</p>
                </FooterSub>
            </div>
        </FooterWrapper>
    </Card>
  );
}

export default CartWeather;
