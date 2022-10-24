import styled from 'styled-components';

export const WeatherCardWrapper = styled.div`
  border-radius: 50px;
  background: hsl(262, 80%, 25%, 0.5);
  width: 400px;
  padding: 24px;

  @media (max-width: 768px) {
    height: 450px;
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
  margin-left: 40px;
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
  justify-content: space-evenly;
  color: white;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;
export const WeatherOptions = styled.div`
  flex: 1 1 0;
`;
export const WeatherOptionText = styled.div``;
export const WeatherOptionContainer = styled.div``;
export const WeatherOptionIcon = styled.img`
  padding: 5px;
`;
export const WeatherOptionTitle = styled.p`
  padding-right: 5px;
`;
export const WeatherOptionDescription = styled.p``;
