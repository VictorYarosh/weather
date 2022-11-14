import React, { FC } from 'react';
import {
  FooterWrapper,
  Temperature,
  TemperatureSing,
  TemperatureWrapper,
  TitleWrapper,
  WeatherCardWrapper,
  WeatherImg,
  WeatherOptions,
  WeatherOptionContainer,
  WeatherOptionDescription,
  WeatherOptionIcon,
  WeatherOptionTitle,
  Footer,
  WeatherHeadCard,
  TemperatureDescription,
  Title,
  TitleDescription,
  TemperatureNumber
} from './weather-card.styled';

import { WeatherCardProps } from './types';
import useWeatherCard from './use-weather-card';
import DropdownMenu from '../dropdown';
import IconEye from '../../../assets/images/eye.svg';
import IconWater from '../../../assets/images/water.svg';
import IconTemperature from '../../../assets/images/temperature.svg';
import IconWindy from '../../../assets/images/windy.svg';
import { getFormattedTemperature } from '../../../helpers';
import { getWeatherImageName } from './weather-icon';

const WeatherCard: FC<WeatherCardProps> = ({ city, weather }) => {
  const { dateBuilder, data, isLoading } = useWeatherCard({ city, weather });

  return (
    <WeatherCardWrapper>
      {isLoading}
      <DropdownMenu />
      <WeatherHeadCard>
        <WeatherImg src={getWeatherImageName(data.weather[0].icon)} />
        <TitleWrapper>
          <Title>
            {data.name}, {data.sys.country}
          </Title>
          <TitleDescription>{dateBuilder(new Date())}</TitleDescription>
        </TitleWrapper>
      </WeatherHeadCard>
      <TemperatureWrapper>
        <Temperature>
          <TemperatureNumber>
            {getFormattedTemperature(data.main.temp)}
          </TemperatureNumber>
          <TemperatureDescription>
            {data.weather.map(({ description }) => (
              <p>{description}</p>
            ))}
          </TemperatureDescription>
        </Temperature>
        <TemperatureSing>
          <p>°C</p>
        </TemperatureSing>
      </TemperatureWrapper>
      <Footer>
        <FooterWrapper>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconEye} />
              <WeatherOptionTitle>Visibility</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionDescription>
              {data.visibility}
            </WeatherOptionDescription>
          </WeatherOptions>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconWater} />
              <WeatherOptionTitle>Humidity</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionDescription>
              {data.main.humidity}
            </WeatherOptionDescription>
          </WeatherOptions>
        </FooterWrapper>
        <FooterWrapper>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconTemperature} />
              <WeatherOptionTitle>Feels like</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionDescription>
              {getFormattedTemperature(data.main.feels_like)}°C
            </WeatherOptionDescription>
          </WeatherOptions>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconWindy} />
              <WeatherOptionTitle>Wind</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionDescription>
              {getFormattedTemperature(data.wind.speed)}
            </WeatherOptionDescription>
          </WeatherOptions>
        </FooterWrapper>
      </Footer>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
