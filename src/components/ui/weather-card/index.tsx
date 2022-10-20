import React from 'react';
import {
  FooterImg,
  FooterLine,
  FooterSub,
  FooterText,
  FooterWrapper,
  Temperature,
  TemperatureSing,
  TemperatureSub,
  TemperatureWrapper,
  Title,
  TitleSub,
  TitleWrapper,
  WeatherCardWrapper,
  WeatherIcon,
  WeatherImg
} from './weather-card.styled';

import useWeatherCard from './use-weather-card';

import DropdownMenu from '../dropdown';
import SunIcon from '../../../assets/images/sunny.png';
import IconEye from '../../../assets/images/eye.svg';
import IconWater from '../../../assets/images/water.svg';
import IconTemperature from '../../../assets/images/temperature.svg';
import IconWindy from '../../../assets/images/windy.svg';
import { getFormattedTemperature } from '../../../utils';

const WeatherCard = () => {
  const { dateBuilder, data } = useWeatherCard();

  return (
    <WeatherCardWrapper>
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
        <TemperatureSing>°C</TemperatureSing>
        <Temperature>{getFormattedTemperature(data.main.temp)}</Temperature>
        <Title>
          {data.weather.map(({ description }) => (
            <div>{description}</div>
          ))}
        </Title>
      </TemperatureWrapper>
      <FooterWrapper>
        <div>
          <FooterSub>
            <FooterImg src={IconEye} />
            <FooterText>Visibility {data.visibility}km</FooterText>
            <FooterLine></FooterLine>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWater} />
            <FooterText>Humidity {data.main.humidity}km</FooterText>
          </FooterSub>
        </div>
        <div>
          <FooterSub>
            <FooterImg src={IconTemperature} />
            <FooterText>
              Feels like {getFormattedTemperature(data.main.feels_like)}°C
            </FooterText>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWindy} />
            <FooterText>
              Wind {getFormattedTemperature(data.wind.speed)}s
            </FooterText>
          </FooterSub>
        </div>
      </FooterWrapper>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
