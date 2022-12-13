import { useState } from 'react';

const useDropdownMenu = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  //delete card in state
  // const handleDelete = () => {};

  // я не знаю як повертатися до початкового стану
  const handleOnDisable = () => {
    // setCities();
  };

  return {
    handleToggleDropdown,
    handleOnDisable,

    dropdownActive
  };
};

export default useDropdownMenu;
