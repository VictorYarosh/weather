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
import { DropdownMenuProps } from './types';
import Cross from '../../../assets/images/cross.png';

const DropdownMenu: FC<DropdownMenuProps> = ({ index }) => {
  const { handleToggleDropdown, handleDeleteCard, dropdownActive } =
    useDropdownMenu({
      index
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
          {/*<BurgerContentLink href="/map-ukraine">Map</BurgerContentLink>*/}
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
