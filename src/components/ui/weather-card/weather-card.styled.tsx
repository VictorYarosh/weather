import styled from 'styled-components';

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
export const WeatherIcon = styled.div`
  display: flex;
`;
export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const TitleWrapper = styled.div`
  margin-left: 17px;
  color: white;
  font-weight: 400;
  line-height: 27px;

  @media (max-width: 425px) {
    line-height: 20px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
export const Title = styled.div`
  padding-top: 70px;
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
  font-size: 15px;
  line-height: 27px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  padding-bottom: 70px;
`;
export const Temperature = styled.p`
  line-height: 10px;
  font-size: 144px;
  font-weight: 500;
  margin: 75px;
  position: absolute;

  @media (max-width: 768px) {
    margin: 60px;
  }
  @media (max-width: 425px) {
    font-size: 120px;
  }
`;
export const TemperatureSing = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 25px;
  padding-left: 180px;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 22px;
    padding-left: 135px;
  }
`;

export const TemperatureSub = styled.div`
  padding: 20px 0 0;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  color: white;
  padding-bottom: 25px;

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
