import styled from 'styled-components';

export const DropdownWrapper = styled.div``;
export const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const DropdownList = styled.ul`
  flex-direction: column;
  color: #fff;
  cursor: pointer;
  margin: 0 16px;
`;
export const DropdownListLi = styled.li`
  background: none repeat scroll 0 0 #fff;
  height: 4px;
  width: 4px;
  line-height: 0;
  list-style: none outside none;
  margin-top: 3px;
  vertical-align: top;
  border-radius: 50%;
  pointer-events: none;
`;
export const BurgerContent = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 40px;
`;
export const BurgerContentLink = styled.a`
  position: relative;
  color: white;
  padding: 10px;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: pointer;
`;
export const CrossWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CrossIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
