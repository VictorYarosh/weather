import { useState } from 'react';
import { UseDropdownMenuProps } from './types';

const useDropdownMenu = ({
  setCities,
  cities,
  index
}: UseDropdownMenuProps) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleDeleteCard = () => {
    const newCities = cities.splice(index);

    setCities(newCities);
  };

  return {
    handleToggleDropdown,
    handleDeleteCard,
    setCities,

    dropdownActive
  };
};

export default useDropdownMenu;
