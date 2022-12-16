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
import { DropdownMenuProps } from './types';

const DropdownMenu: FC<DropdownMenuProps> = ({ setCities }) => {
  const { handleToggleDropdown, handleDeleteCard, dropdownActive } =
    useDropdownMenu({
      setCities
    });

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
          <BurgerContentLink onClick={handleDeleteCard}>
            Delete
          </BurgerContentLink>
          <CrossWrapper>
            <CrossIcon src={Cross} onClick={handleToggleDropdown} />
          </CrossWrapper>
        </BurgerContent>
      )}
    </DropdownWrapper>
  );
};
export default DropdownMenu;
