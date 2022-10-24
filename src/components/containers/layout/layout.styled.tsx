import styled from 'styled-components';

export const LayoutStyled = styled.div`
  height: 100vh;
  background: linear-gradient(217deg, #6447b5, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #82e1ff, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #6447b5, rgba(0, 0, 255, 0) 70.71%);

  @media only screen and (max-width: 480px) {
    height: auto;
  }
`;
