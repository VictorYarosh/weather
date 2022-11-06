import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 95px;
  background: rgba(255, 255, 255, 0.19);
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
  padding: 10px 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 12px;
  }
`;
