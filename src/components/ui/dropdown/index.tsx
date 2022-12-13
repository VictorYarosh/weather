import React, { FC } from 'react';
import {
  DropdownWrapper,
  BurgerContent,
  BurgerContentLink,
  DropdownList,
  DropdownListLi,
  Dropdown,
  CrossWrapper,
  CrossIcon
} from './dropdown.styled';

import useDropdownMenu from './use-dropdown';
import Cross from '../../../assets/images/cross.png';

const DropdownMenu = () => {
  const { handleToggleDropdown, dropdownActive } = useDropdownMenu();

  return (
    <DropdownWrapper>
      {!dropdownActive ? (
        <Dropdown>
          <DropdownList onClick={handleToggleDropdown}>
            <DropdownListLi></DropdownListLi>
            <DropdownListLi></DropdownListLi>
            <DropdownListLi></DropdownListLi>
          </DropdownList>
        </Dropdown>
      ) : (
        <BurgerContent>
          <BurgerContentLink>Home</BurgerContentLink>
          <BurgerContentLink>Delete</BurgerContentLink>
          <CrossWrapper>
            <CrossIcon src={Cross} onClick={handleToggleDropdown} />
          </CrossWrapper>
        </BurgerContent>
      )}
    </DropdownWrapper>
  );
};
export default DropdownMenu;
