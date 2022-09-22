import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: purple;
  display: flex;
  justify-content: space-between;
  height: auto;
  background-image: linear-gradient(to bottom right, #6447b5, #9881da);

  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
export const Links = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  @media (max-width: 425px) {
    margin: 0;
    font-size: 15px;
  }
`;
export const LinksImg = styled.img`
    padding: 10px 10px;
`;
export const LogoTxt = styled.a`
  margin: 20px 60px;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  @media (max-width: 425px) {
    margin: 15px 25px;
    line-height: 22px;
    font-size: 15px
  }
  @media (max-width: 425px) {
    font-size: 13px
  }
`;
export const LinksPage = styled.div`
  padding: 20px 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 12px;
  }
`;

