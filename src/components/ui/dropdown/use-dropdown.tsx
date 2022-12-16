import { useState } from 'react';
import { UseDropdownMenuProps } from './types';

const useDropdownMenu = ({ setCities }: UseDropdownMenuProps) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleDeleteCard = ({ values }: any) => {
    setCities([].splice(values));
  };

  return {
    handleToggleDropdown,
    handleDeleteCard,
    setCities,

    dropdownActive
  };
};

export default useDropdownMenu;
