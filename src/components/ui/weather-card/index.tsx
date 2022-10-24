import React, { FC } from 'react';
import {
  FooterLine,
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
  WeatherImg,
  WeatherOptions,
  WeatherOptionsContainer,
  WeatherOptionsDescription,
  WeatherOptionsIcon,
  WeatherOptionsText,
  WeatherOptionsTitle
} from './weather-card.styled';

import useWeatherCard from './use-weather-card';

import DropdownMenu from '../dropdown';
import SunIcon from '../../../assets/icons/01d.png';
import IconEye from '../../../assets/images/eye.svg';
import IconWater from '../../../assets/images/water.svg';
import IconTemperature from '../../../assets/images/temperature.svg';
import IconWindy from '../../../assets/images/windy.svg';
import { getFormattedTemperature } from '../../../utils';
import { WeatherCardProps } from './types';

const WeatherCard: FC<WeatherCardProps> = ({ city }) => {
  const { dateBuilder, data } = useWeatherCard({ city });

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
        <WeatherOptions>
          <WeatherOptionsContainer>
            <WeatherOptionsIcon src={IconEye} />
            <WeatherOptionsText>
              <WeatherOptionsTitle>Visibility</WeatherOptionsTitle>
              <WeatherOptionsDescription>
                {data.visibility}km
              </WeatherOptionsDescription>
              <FooterLine />
            </WeatherOptionsText>
          </WeatherOptionsContainer>
          <WeatherOptionsContainer>
            <WeatherOptionsIcon src={IconWater} />
            <WeatherOptionsText>
              <WeatherOptionsTitle>Humidity</WeatherOptionsTitle>
              <WeatherOptionsDescription>
                {data.main.humidity}km
              </WeatherOptionsDescription>
            </WeatherOptionsText>
          </WeatherOptionsContainer>
        </WeatherOptions>
        <WeatherOptions>
          <WeatherOptionsContainer>
            <WeatherOptionsIcon src={IconTemperature} />
            <WeatherOptionsText>
              <WeatherOptionsTitle>Feels like</WeatherOptionsTitle>
              <WeatherOptionsDescription>
                {getFormattedTemperature(data.main.feels_like)}°C
              </WeatherOptionsDescription>
            </WeatherOptionsText>
          </WeatherOptionsContainer>
          <WeatherOptionsContainer>
            <WeatherOptionsIcon src={IconWindy} />
            <WeatherOptionsText>
              <WeatherOptionsTitle>Wind</WeatherOptionsTitle>
              <WeatherOptionsDescription>
                {getFormattedTemperature(data.wind.speed)}s
              </WeatherOptionsDescription>
            </WeatherOptionsText>
          </WeatherOptionsContainer>
        </WeatherOptions>
      </FooterWrapper>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
