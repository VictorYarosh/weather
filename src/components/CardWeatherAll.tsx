import React, { useState } from "react";
import styled from "styled-components";

const CardRight = styled.div`
  width: 450px;
  height: 575px;
  margin: 80px 0;
  border-radius: 50px;
  background-color: #5639a8;

  @media (max-width: 425px) {
    width: 375px;
    height: 520px;
  }
  @media (max-width: 375px) {
    width: 320px;
    height: 500px;
  }
`;

const CardWeatherAll: React.FC = () => {
  return (
    <CardRight>
      <div></div>
    </CardRight>
  );
};

export default CardWeatherAll;
