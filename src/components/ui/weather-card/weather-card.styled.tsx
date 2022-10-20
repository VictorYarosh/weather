import styled from 'styled-components';

export const WeatherCardWrapper = styled.div`
  border-radius: 50px;
  background: hsl(262, 80%, 25%, 0.5);
  margin: 20px 20px;
  width: 400px;

  @media (max-width: 425px) {
    width: auto;
  }
`;
export const WeatherIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;
export const TitleWrapper = styled.div`
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
export const Title = styled.p`
  padding-top: 50px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
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
    font-size: 120px;
  }
  @media (max-width: 425px) {
    font-size: 130px;
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
    padding-left: 160px;
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
  margin: 40px 0;

  @media (max-width: 425px) {
    margin: 30px 0;
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

    @media (max-width: 1024px) {
      left: 22px;
    }
    @media (max-width: 768px) {
      top: 40px;
      left: 15px;
    }
    @media (max-width: 425px) {
      top: 48px;
    }
  }
  :before {
    border-right: 2px solid white;
    bottom: 0;
    content: '';
    position: relative;
    top: 0;
    left: 22px;

    @media (max-width: 1024px) {
      left: 22px;
    }
    @media (max-width: 768px) {
      left: 16px;
    }
  }
`;
export const FooterImg = styled.img`
  @media (max-width: 425px) {
    padding: 13px 5px;
    width: 20px;
    height: 20px;
  }
`;
export const FooterText = styled.p`
  font-size: 16px;
  padding-left: 10px;

  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 12px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
  }
`;
