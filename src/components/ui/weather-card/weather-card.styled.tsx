import styled from 'styled-components';

export const WeatherCardWrapper = styled.div`
  margin: 20px;
  min-width: 30%;
  border-radius: 50px;
  background: hsl(262, 80%, 25%, 0.5);

  @media (max-width: 1024px) {
    min-width: 35%;
  }
`;
export const WeatherIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: -15px 0;
`;
export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const TitleWrapper = styled.div`
  color: white;
  font-weight: 400;
  line-height: 27px;
  padding-right: 100px;

  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
export const Title = styled.p`
  padding-top: 50px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
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
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 25px;
  }
`;
export const Temperature = styled.p`
  line-height: 10px;
  font-size: 144px;
  font-weight: 500;
  margin: 75px;
  position: absolute;

  @media (max-width: 768px) {
    font-size: 130px;
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
`;

export const TemperatureSub = styled.div`
  padding: 20px 0 0;
  font-size: 24px;
  font-weight: 400;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  margin: 50px 0;

  @media (max-width: 1024px) {
    margin: 40px -10px;
  }
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
export const FooterSub = styled.span`
  display: flex;

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
  }
`;
export const FooterLine = styled.p`
  :after {
    border-right: 2px solid white;
    bottom: 0;
    content: '';
    position: relative;
    top: 50px;
    left: 20px;
  }
  :before {
    border-right: 2px solid white;
    bottom: 0;
    content: '';
    position: relative;
    top: 0;
    left: 22px;
  }
`;
export const FooterImg = styled.img`
  @media (max-width: 768px) {
    padding: 8px 5px;
  }
  @media (max-width: 425px) {
    padding: 13px 5px;
    width: 20px;
    height: 20px;
  }
`;
export const FooterText = styled.p`
  font-size: 16px;
  padding-left: 10px;
`;
