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
  Spinner,
  SpinnerWrapper
} from '../weather-card-control/weather-card-control.styled';
import { getFormattedTemperature } from '../../../helpers';
import IconEye from '../../../assets/images/eye.svg';
import IconWater from '../../../assets/images/water.svg';
import IconTemperature from '../../../assets/images/temperature.svg';
import IconWindy from '../../../assets/images/windy.svg';
import SpinnerIcon from '../../../assets/images/lodiang.svg';

const WeatherCard: FC<WeatherCardProps> = ({ city, index }) => {
  const { dateBuilder, data, isLoading } = useWeatherCard({
    city,
    index
  });

  return (
    <WeatherCardWrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner>
            <img src={SpinnerIcon} />
          </Spinner>
        </SpinnerWrapper>
      ) : (
        <>
          <DropdownMenu index={index} />
          <WeatherHeadCard>
            <WeatherImg
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
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
                  {data.main.humidity} %
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
                  {getFormattedTemperature(data.wind.speed)} s
                </WeatherOptionDescription>
              </WeatherOptions>
            </FooterWrapper>
          </Footer>
        </>
      )}
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
