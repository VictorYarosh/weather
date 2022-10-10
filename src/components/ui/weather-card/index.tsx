import React from 'react';
import {
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
  WeatherCardWrapper,
  WeatherIcon,
  WeatherImg
} from './weather-card.styled';

import useWeatherCard from './use-weather-card';

import DropdownMenu from '../dropdown';
import SunIcon from '../../../assets/images/sunny.png';
import IconEye from '../../../assets/images/eye.png';
import IconWater from '../../../assets/images/Vector.png';
import IconTemperature from '../../../assets/images/temperature.png';
import IconWindy from '../../../assets/images/windy.png';
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
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
