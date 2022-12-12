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
import Cross from '../../../assets/images/icon-cross.svg';
import useDropdown from './use-dropdown';

const DropdownMenu = () => {
  const { handleOnClick, handleOnDisable, dropdownActive } = useDropdown();

  return (
    <DropdownWrapper>
      {dropdownActive ? (
        <Dropdown>
          <DropdownList onClick={handleOnClick}>
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
            <CrossIcon src={Cross} onClick={handleOnDisable} />
          </CrossWrapper>
        </BurgerContent>
      )}
    </DropdownWrapper>
  );
};
export default DropdownMenu;
