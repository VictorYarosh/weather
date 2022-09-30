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
  color: #fff;
  padding: 5px 35px;
  cursor: pointer;
`;
export const DropdownListLi = styled.li`
  background: none repeat scroll 0 0 #fff;
  height: 7px;
  width: 7px;
  line-height: 0;
  list-style: none outside none;
  margin-right: 15px;
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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  max-width: 100px;
  max-height: 30%;
`;
export const BurgerContentText = styled.a`
  position: relative;
  color: white;
  padding: 17px;
  text-decoration: none;
  display: block;
  text-align: center;
`;
