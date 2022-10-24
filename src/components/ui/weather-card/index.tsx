import React, { FC } from 'react';
import {
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
  WeatherOptionContainer,
  WeatherOptionDescription,
  WeatherOptionIcon,
  WeatherOptionText,
  WeatherOptionTitle
} from './weather-card.styled';

import useWeatherCard from './use-weather-card';
import { WeatherCardProps } from './types';
import DropdownMenu from '../dropdown';
import SunIcon from '../../../assets/icons/01d.png';
import IconEye from '../../../assets/images/eye.svg';
import IconWater from '../../../assets/images/water.svg';
import IconTemperature from '../../../assets/images/temperature.svg';
import IconWindy from '../../../assets/images/windy.svg';
import { getFormattedTemperature } from '../../../utils';

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
          <WeatherOptionContainer>
            <WeatherOptionIcon src={IconEye} />
            <WeatherOptionText>
              <WeatherOptionTitle>Visibility</WeatherOptionTitle>
              <WeatherOptionDescription>
                {data.visibility}km
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptionContainer>
          <WeatherOptionContainer>
            <WeatherOptionIcon src={IconWater} />
            <WeatherOptionText>
              <WeatherOptionTitle>Humidity</WeatherOptionTitle>
              <WeatherOptionDescription>
                {data.main.humidity}km
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptionContainer>
        </WeatherOptions>
        <WeatherOptions>
          <WeatherOptionContainer>
            <WeatherOptionIcon src={IconTemperature} />
            <WeatherOptionText>
              <WeatherOptionTitle>Feels like</WeatherOptionTitle>
              <WeatherOptionDescription>
                {getFormattedTemperature(data.main.feels_like)}°C
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptionContainer>
          <WeatherOptionContainer>
            <WeatherOptionIcon src={IconWindy} />
            <WeatherOptionText>
              <WeatherOptionTitle>Wind</WeatherOptionTitle>
              <WeatherOptionDescription>
                {getFormattedTemperature(data.wind.speed)}s
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptionContainer>
        </WeatherOptions>
      </FooterWrapper>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
