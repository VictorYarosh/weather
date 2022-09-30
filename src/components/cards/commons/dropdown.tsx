import React from 'react';
import {
  BurgerContent,
  BurgerContentText,
  Dropdown,
  DropdownInput,
  DropdownList,
  DropdownListLi
} from '../commons/dropdown-styled';

const DropdownMenu = () => {
  return (
    <Dropdown>
      <DropdownInput type={'checkbox'} />
      <DropdownList>
        <DropdownListLi></DropdownListLi>
        <DropdownListLi></DropdownListLi>
        <DropdownListLi></DropdownListLi>
      </DropdownList>
      <BurgerContent>
        <BurgerContentText>Home</BurgerContentText>
        <BurgerContentText>About</BurgerContentText>
        <BurgerContentText>Contacts</BurgerContentText>
      </BurgerContent>
    </Dropdown>
  );
};
export default DropdownMenu;
