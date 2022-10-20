import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 30px;
  }
`;
