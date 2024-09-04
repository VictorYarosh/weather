import styled from 'styled-components';

export const CrossWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 25px;
`;
export const CrossIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const WeatherCardWrapper = styled.div`
  border-radius: 40px;
  background: hsl(262, 80%, 25%, 0.5);
  width: 400px;
  padding: 24px;
  height: 525px;
`;
export const WeatherHeadCard = styled.div`
  display: flex;
  padding: 10px 0;
`;
export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px 17px;
  color: white;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const TitleDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;
export const TemperatureSing = styled.div`
  padding-top: 13px;

  p {
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
  }
`;
export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TemperatureNumber = styled.span`
  font-size: 144px;
  font-weight: 500;
  line-height: 150px;
`;
export const TemperatureDescription = styled.div`
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 0;
  }
`;

export const Footer = styled.div`
  padding: 25px 0 36px;
`;
export const FooterWrapper = styled.div`
  display: flex;
  color: white;
  margin-top: 25px;
`;
export const WeatherOptions = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  :not(:last-child) {
    height: 24px;
    border-right: 1px solid;
  }
`;
export const WeatherOptionContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const WeatherOptionIcon = styled.img`
  height: 22px;
  width: 22px;
`;
export const WeatherOptionTitle = styled.span`
  margin: 0 10px 0 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
export const WeatherOptionDescription = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 460px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
