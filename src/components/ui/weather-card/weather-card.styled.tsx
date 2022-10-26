import styled from 'styled-components';

export const Footer = styled.div`
  padding-bottom: 60px;
`;
export const WeatherCardWrapper = styled.div`
  border-radius: 50px;
  background: hsl(262, 80%, 25%, 0.5);
  width: 400px;
  padding: 24px;

  @media (max-width: 970px) {
    height: 475px;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`;
export const WeatherHeadCard = styled.div`
  display: flex;
  padding: 15px 0;
`;
export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 17px;
  color: white;
  font-weight: 400;
  line-height: 27px;
`;
export const Title = styled.div`
  padding-top: 85px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 15px;
    padding-top: 55px;
  }
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
export const TitleSub = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  padding-bottom: 70px;

  @media (max-width: 425px) {
    padding-bottom: 25px;
  }
`;
export const Temperature = styled.p`
  line-height: 10px;
  font-size: 144px;
  font-weight: 500;
  margin: 75px;
  position: absolute;

  @media (max-width: 768px) {
    font-size: 110px;
    margin: 60px;
  }
`;
export const TemperatureSing = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  padding-left: 135px;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 22px;
    padding-left: 135px;
  }
`;

export const TemperatureSub = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  color: white;
  padding: 20px 0;

  @media (max-width: 425px) {
    padding: 15px;
  }
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
export const WeatherOptionText = styled.div``;
export const WeatherOptionIcon = styled.img`
  height: 22px;
  width: 22px;
  padding: 0 10px;

  @media (max-width: 425px) {
    padding: 0 5px;
  }
  @media (max-width: 375px) {
    padding: 0 2px;
  }
`;
export const WeatherOptionTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
export const WeatherOptionDescription = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding-right: 10px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding-right: 5px;
  }
`;
