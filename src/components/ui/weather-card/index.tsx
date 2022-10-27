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
  WeatherOptionText,
  WeatherOptionTitle,
  Footer,
  WeatherHeadCard,
  TemperatureDescription,
  Title,
  TitleDescription
} from './weather-card.styled';

import { WeatherCardProps } from './types';
import useWeatherCard from './use-weather-card';
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
      <WeatherHeadCard>
        <WeatherImg src={SunIcon} />
        <TitleWrapper>
          <Title>
            {data.name}, {data.sys.country}
          </Title>
          <TitleDescription>{dateBuilder(new Date())}</TitleDescription>
        </TitleWrapper>
      </WeatherHeadCard>
      <TemperatureWrapper>
        <div>
          <TemperatureSing>°C</TemperatureSing>
          <Temperature>{getFormattedTemperature(data.main.temp)}</Temperature>
        </div>
        <TemperatureDescription>
          {data.weather.map(({ description }) => (
            <span>{description}</span>
          ))}
        </TemperatureDescription>
      </TemperatureWrapper>
      <Footer>
        <FooterWrapper>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconEye} />
              <WeatherOptionTitle>Visibility</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionText>
              <WeatherOptionDescription>
                {data.visibility}km
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptions>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconWater} />
              <WeatherOptionTitle>Humidity</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionText>
              <WeatherOptionDescription>
                {data.main.humidity}km
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptions>
        </FooterWrapper>
        <FooterWrapper>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconTemperature} />
              <WeatherOptionTitle>Feels like</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionText>
              <WeatherOptionDescription>
                {getFormattedTemperature(data.main.feels_like)}°C
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptions>
          <WeatherOptions>
            <WeatherOptionContainer>
              <WeatherOptionIcon src={IconWindy} />
              <WeatherOptionTitle>Wind</WeatherOptionTitle>
            </WeatherOptionContainer>
            <WeatherOptionText>
              <WeatherOptionDescription>
                {getFormattedTemperature(data.wind.speed)}s
              </WeatherOptionDescription>
            </WeatherOptionText>
          </WeatherOptions>
        </FooterWrapper>
      </Footer>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
