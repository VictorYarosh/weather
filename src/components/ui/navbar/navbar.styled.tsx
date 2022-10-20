import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: auto;
  background: hsl(245, 62%, 80%);
  //background-color: white;
  //opacity: 0.8;
`;

export const Links = styled.ul`
  text-decoration: none;
  color: white;
  display: flex;
  list-style: none;

  @media (max-width: 425px) {
    margin-top: 20px;
    font-size: 15px;
  }
`;

export const LinksPage = styled.li`
  padding: 20px 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 12px;
  }
`;
