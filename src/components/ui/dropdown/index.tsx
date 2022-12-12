import React from 'react';
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
import Cross from '../../../assets/images/cross.png';
import useDropdownMenu from './use-dropdown';

const DropdownMenu = () => {
  const { handleActiveDropdown, dropdownActive } = useDropdownMenu();

  return (
    <DropdownWrapper>
      {dropdownActive ? (
        <Dropdown>
          <DropdownList onClick={handleActiveDropdown}>
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
            <CrossIcon src={Cross} onClick={handleActiveDropdown} />
          </CrossWrapper>
        </BurgerContent>
      )}
    </DropdownWrapper>
  );
};
export default DropdownMenu;
