import React, { useState } from "react";
import styled from "styled-components";

const CardRight = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: blueviolet;
  width: 100%;
  height: 100%;
  padding: 60px 0;

  div {
    width: 450px;
    height: 575px;
    border-radius: 50px;
    background-color: purple;
  }
`;

type Props = {};

const LastScreen: React.FC<Props> = () => {
  return (
    <CardRight>
      <div>Hi</div>
    </CardRight>
  );
};

export default LastScreen;
