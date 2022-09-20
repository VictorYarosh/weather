import React, { useState } from "react";
import styled from "styled-components";

const CardRight = styled.div`
  width: 450px;
  height: 575px;
  margin: 80px 0;
  border-radius: 50px;
  background-color: #533489;

  @media (max-width: 425px) {
    width: 80%;
  }
`;

type Props = {};

const CardWeatherAll: React.FC<Props> = () => {
  return (
    <CardRight>
      <div></div>
    </CardRight>
  );
};

export default CardWeatherAll;
