import styled from "styled-components";

export const Card = styled.div`
  width: 450px;
  height: 575px;
  margin: 80px 0;
  border-radius: 50px;
  background-color: #5639a8;

  @media (max-width: 425px) {
    width: 375px;
    height: 540px;
  }
  @media (max-width: 375px) {
    width: 320px;
    height: 525px;
  }
`;
export const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const DropdownInput = styled.input`
  display: none;
  margin: 50px -30px;
`;
export const DropdownList = styled.ul`
  color: #fff;
  padding: 5px 35px;
  cursor: pointer;
`;
export const DropdownListLi = styled.li`
  background: none repeat scroll 0 0 #fff;
  height: 7px;
  width: 7px;
  line-height: 0;
  list-style: none outside none;
  margin-right: 15px;
  margin-top: 3px;
  vertical-align: top;
  border-radius: 50%;
  pointer-events: none;
`;
export const BurgerContent = styled.div`
  display: none;
  position: absolute;
  background-color: purple;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  max-width: 100px;
  max-height: 30%;
`;
export const BurgerContentText = styled.a`
  position: relative;
  color: white;
  padding: 17px;
  text-decoration: none;
  display: block;
  text-align: center;
`;
export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
`;
export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  margin-right: 30px;

  @media (max-width: 425px) {
    margin-right: 18px;
  }
`;
export const TitleWrapper = styled.div`
  color: white;
  font-weight: 400;
  line-height: 27px;
  margin: 20px 0;

  @media (max-width: 425px) {
    font-size: 14px;
    margin: 10px 0px 0px -15px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
export const Title = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const TitleSub = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 27px;
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
  font-size: 70px;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 60px;
  }
`;
export const TemperatureSub = styled.div`
  padding: 20px 0;
  font-size: 24px;
  font-weight: 400;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
`;
export const FooterSub = styled.span`
  display: flex;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
export const FooterImg = styled.img`
  padding: 13px 15px;
  width: 24px;
  height: 24px;
  
  @media (max-width: 425px) {
    width: 20px;
    height: 20px;
  }
`;
export const FooterText = styled.p`
  :before {
    border-right: 2px solid white;
    bottom: 0;
    content: "";
    position: relative;
    top: 0px;
    left: 110px;
    
    @media (max-width: 425px) {
      left: 90px;
    }
    @media (max-width: 375px) {
      left: 80px;
    }
  }
`;