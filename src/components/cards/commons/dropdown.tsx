import React from 'react';
import {
  BurgerContent,
  BurgerContentLink,
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
        <BurgerContentLink>Home</BurgerContentLink>
        <BurgerContentLink>About</BurgerContentLink>
        <BurgerContentLink>Contacts</BurgerContentLink>
      </BurgerContent>
    </Dropdown>
  );
};
export default DropdownMenu;
