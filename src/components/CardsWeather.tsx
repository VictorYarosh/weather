import React, { useState } from 'react';
import styled from 'styled-components';
import SunIcon from '../images/sum.png';

const Cards = styled.div`
  display: flex;
  justify-content: center;
  background-color: blueviolet;
  width: 100%;
  height: 100%;
  padding: 60px 0;

  div {
    width: 450px;
    height: 575px;
    border-radius: 50px;
    background-color: purple;
    margin-right: 40px;
  }
`;

const Burger = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;

  div:before,
  div:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    background-color: black;
    border-radius: inherit;
  }

  div:before {
    top: 40px;
  }

  div:after {
    top: 80px;
  }
`;

const SunIconStyled = styled.a`
  img {
    width: 80px;
    height: 80px;
    background-color: purple;
  }
`;

type Props = {};

type Task = {
  label: string;
};

const CardsWeather: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <Cards>
      <div>
        <Burger>
          <div></div>
        </Burger>
      </div>
      <div>hi</div>
    </Cards>
  );
};

export default CardsWeather;
