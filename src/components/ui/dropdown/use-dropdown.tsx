import { useState } from 'react';

const useDropdownMenu = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  // const handleDeleteCard = () => {
  //
  // }

  return {
    handleToggleDropdown,

    dropdownActive
  };
};

export default useDropdownMenu;
