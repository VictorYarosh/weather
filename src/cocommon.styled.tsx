import styled from 'styled-components';

export const CardsPages = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
