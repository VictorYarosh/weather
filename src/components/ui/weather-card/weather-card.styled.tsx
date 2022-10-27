import styled from 'styled-components';

export const WeatherCardWrapper = styled.div`
  border-radius: 40px;
  background: hsl(262, 80%, 25%, 0.5);
  width: 400px;
  padding: 24px;

  @media (max-width: 970px) {
    height: 475px;
  }
`;
export const WeatherHeadCard = styled.div`
  display: flex;
  padding: 10px 0 25px 0;
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
export const TitleDescription = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-bottom: 50px;

  @media (max-width: 980px) {
    padding-bottom: 15px;
  }
`;
export const TemperatureSing = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  position: absolute;
  margin: 20px -15px;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 22px;
  }
`;
export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TemperatureNumber = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 144px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 135px;
  }
  @media (max-width: 768px) {
    font-size: 110px;
  }
`;
export const TemperatureDescription = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 15px;
`;

export const Footer = styled.div`
  padding-bottom: 36px;
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

  :not(:last-child) {
    height: 24px;
    border-right: 2px solid;
  }
`;
export const WeatherOptionContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const WeatherOptionIcon = styled.img`
  height: 22px;
  width: 22px;
  padding: 0 10px;

  @media (max-width: 375px) {
    padding: 0 5px;
  }
`;
export const WeatherOptionTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
export const WeatherOptionDescription = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding-right: 10px;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
