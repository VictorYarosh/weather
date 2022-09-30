import React from 'react';
import {
  Card,
  FooterImg,
  FooterSub,
  FooterText,
  FooterWrapper,
  Temperature,
  TemperatureSub,
  TemperatureWrapper,
  Title,
  TitleSub,
  TitleWrapper,
  WeatherIcon,
  WeatherImg
} from './cards-weather.styled';
import DropdownMenu from './commons/dropdown';
import SunIcon from '../../images/sunny.png';
import IconEye from '../../images/eye.png';
import IconWater from '../../images/Vector.png';
import IconTemperature from '../../images/temperature.png';
import IconWindy from '../../images/windy.png';
import useCardWeather from '../../hooks/useCardWeather';
import { getFormattedTemperature } from '../../utils';

const CardWeather = () => {
  const { dateBuilder, data } = useCardWeather();

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
        <Temperature>{getFormattedTemperature(data.main.temp)}°C</Temperature>
        <TemperatureSub>
          {data.name}, {data.sys.country}
        </TemperatureSub>
        <Title>
          {data.weather.map(({ main }) => (
            <span>{main}</span>
          ))}
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
};

export default CardWeather;
