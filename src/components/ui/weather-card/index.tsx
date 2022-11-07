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
import {
  IoMdThunderstorm,
  IoMdSearch,
  IoMdSunny,
  IoMdRainy,
  IoMdSnow,
  IoMdCloud
} from 'react-icons/io';
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs';
import { ImSpinner8 } from 'react-icons/im';
import IconEye from '../../../assets/images/eye.svg';
import IconWater from '../../../assets/images/water.svg';
import IconTemperature from '../../../assets/images/temperature.svg';
import IconWindy from '../../../assets/images/windy.svg';
import { getFormattedTemperature } from '../../../utils';

const WeatherCard: FC<WeatherCardProps> = ({ city }) => {
  const { dateBuilder, data, isLoading } = useWeatherCard({ city });

  let icon;
  console.log(data.weather[0].main);

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloud />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy />;
      break;
    case 'Clear':
      icon = <IoMdSunny />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }

  return (
    <WeatherCardWrapper>
      {isLoading}
      <DropdownMenu />
      <WeatherHeadCard>
        <WeatherImg>{icon}</WeatherImg>
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
