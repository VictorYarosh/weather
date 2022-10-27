import styled from 'styled-components';

export const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const DropdownInput = styled.input`
  display: none;
  margin: 50px -30px;
`;
export const DropdownList = styled.ul`
  position: absolute;
  color: #fff;
  cursor: pointer;
  margin: 0 6px;
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
  display: none;
  position: absolute;
  background-color: purple;
  overflow: auto;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  max-width: 100px;
  max-height: 30%;
`;
export const BurgerContentLink = styled.a`
  position: relative;
  color: white;
  padding: 17px;
  text-decoration: none;
  display: block;
  text-align: center;
`;
