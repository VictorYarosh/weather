import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
