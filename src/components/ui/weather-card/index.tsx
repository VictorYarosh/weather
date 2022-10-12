import React from 'react';
import {
  FooterImg,
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
            <span>{description}</span>
          ))}
        </Title>
      </TemperatureWrapper>
      <FooterWrapper>
        <div>
          <FooterSub>
            <FooterImg src={IconEye} />
            <FooterText>Visibility {data.visibility}km</FooterText>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWater} />
            <FooterText>Humidity {data.main.humidity}km</FooterText>
          </FooterSub>
        </div>
        <div>
          <FooterSub>
            <FooterImg src={IconTemperature} />
            <p>Feels like {getFormattedTemperature(data.main.feels_like)}°C</p>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWindy} />
            <p>Wind {getFormattedTemperature(data.wind.speed)}s</p>
          </FooterSub>
        </div>
      </FooterWrapper>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
