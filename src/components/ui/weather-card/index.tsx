import React from 'react';
import {
  Card,
  CardStyled,
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
} from './weather-card.styled';

import SunIcon from '../../../assets/images/sunny.png';
import IconEye from '../../../assets/images/eye.png';
import IconWater from '../../../assets/images/Vector.png';
import IconTemperature from '../../../assets/images/temperature.png';
import IconWindy from '../../../assets/images/windy.png';

import { getFormattedTemperature } from '../../../utils';
import cardWeatherHook from '../../../hooks/card-weather-hook';
import DropdownMenu from '../dropdown';

const CardWeather = () => {
  const { dateBuilder, data } = cardWeatherHook();

  return (
    <CardStyled>
      <Card>
        <DropdownMenu />
        <WeatherIcon>
          <WeatherImg src={SunIcon} />
          <TitleWrapper>
            <TemperatureSub>
              {data.name}, {data.sys.country}
            </TemperatureSub>
            <TitleSub>{dateBuilder(new Date())}</TitleSub>
          </TitleWrapper>
        </WeatherIcon>
        <TemperatureWrapper>
          <Temperature>{getFormattedTemperature(data.main.temp)}°C</Temperature>
          <Title>
            {' '}
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
      <Card>
        <div></div>
      </Card>
    </CardStyled>
  );
};

export default CardWeather;
