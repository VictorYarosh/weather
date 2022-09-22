import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SunIcon from "../images/sunny.png";
import IconEye from "../images/eye.png";
import IconWater from "../images/Vector.png";
import IconTemperature from "../images/temperature.png";
import IconWindy from "../images/windy.png";

const Card = styled.div`
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
const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DropdownInput = styled.input`
  display: none;
  margin: 50px -30px;
`;
const DropdownList = styled.ul`
  color: #fff;
  padding: 5px 35px;
  cursor: pointer;
`;
const DropdownListLi = styled.li`
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
const BurgerContent = styled.div`
  display: none;
  position: absolute;
  background-color: purple;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  max-width: 100px;
  max-height: 30%;
`;
const BurgerContentText = styled.a`
  position: relative;
  color: white;
  padding: 17px;
  text-decoration: none;
  display: block;
  text-align: center;
`;
const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
`;
const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  margin-right: 30px;

  @media (max-width: 425px) {
    margin-right: 18px;
  }
`;
const TitleWrapper = styled.div`
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
const Title = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const TitleSub = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 27px;
`;
const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
`;
const Temperature = styled.p`
  line-height: 10px;
  font-size: 70px;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 60px;
  }
`;
const TemperatureSub = styled.span`
  padding: 20px 0;
  font-size: 24px;
  font-weight: 400;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
`;
const FooterSub = styled.span`
  display: flex;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
const FooterImg = styled.img`
  padding: 13px 15px;
  width: 24px;
  height: 24px;
  
  @media (max-width: 425px) {
    width: 20px;
    height: 20px;
  }
`;
const FooterText = styled.p`
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

const api = {
  key: "717d96b0ffbd98f7df5938fac7f277c6",
  base: "https://api.openweathermap.org/data/2.5/",
};

function CardsWeather() {
  const dateBuilder = (d: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const [data, setData] = useState({
    main: { temp: NaN, feels_like: NaN, humidity: NaN },
    wind: { speed: NaN, deg: NaN },
    visibility: NaN,
    name: null,
    sys: { country: null },
    weather: [{ main: null, description: null }],
  });

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${api.base}weather?q=Kyiv,ua&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Lodiang...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <Card>
      <Dropdown>
        <DropdownInput type={"checkbox"} />
        <DropdownList>
          <DropdownListLi></DropdownListLi>
          <DropdownListLi></DropdownListLi>
          <DropdownListLi></DropdownListLi>
        </DropdownList>
        <BurgerContent>
          <BurgerContentText>Home</BurgerContentText>
          <BurgerContentText>About</BurgerContentText>
          <BurgerContentText>Contacts</BurgerContentText>
        </BurgerContent>
      </Dropdown>
      <WeatherIcon>
        <WeatherImg src={SunIcon} />
        <TitleWrapper>
          <Title>Valle de Angeles, HN</Title>
          <TitleSub>{dateBuilder(new Date())}</TitleSub>
        </TitleWrapper>
      </WeatherIcon>
      <TemperatureWrapper>
        <>
          <Temperature>{Math.trunc(data.main.temp)}°C</Temperature>
          <TemperatureSub>
            {data.name}, {data.sys.country}
          </TemperatureSub>
          <Title>
            {data.weather.map(({ main }) => (
              <span>{main}</span>
            ))}
          </Title>
        </>
      </TemperatureWrapper>

      <FooterWrapper>
        <div>
          <FooterSub>
            <FooterImg src={IconEye} />
            <FooterText>{data.visibility}km</FooterText>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWater} />
            <FooterText>{data.main.humidity}km</FooterText>
          </FooterSub>
        </div>
        <div>
          <FooterSub>
            <FooterImg src={IconTemperature} />
            <p>{Math.trunc(data.main.feels_like)}°C</p>
          </FooterSub>
          <FooterSub>
            <FooterImg src={IconWindy} />
            <p>{Math.trunc(data.wind.speed)}s</p>
          </FooterSub>
        </div>
      </FooterWrapper>
    </Card>
  );
}

export default CardsWeather;
