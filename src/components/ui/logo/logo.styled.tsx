import styled from 'styled-components';

export const LogoContainer = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
`;
export const LogoImg = styled.img`
  color: white;
  width: 65px;
  height: 65px;
  padding: 12px 20px 12px 70px;

  @media (max-width: 425px) {
    padding: 15px 10px 12px 25px;
  }
`;
export const LogoName = styled.a`
  margin: 30px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  @media (max-width: 425px) {
    margin: 35px 10px;
    line-height: 30px;
    font-size: 12px;
  }
  @media (max-width: 375px) {
    margin: 35px 0;
  }
`;
