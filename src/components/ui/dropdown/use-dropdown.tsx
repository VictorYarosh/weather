import { useState } from 'react';

const useDropdownMenu = () => {
  const [dropdownActive, setDropdownActive] = useState(true);

  const handleActiveDropdown = () => {
    setDropdownActive(false);
  };

  //delete card in state
  // const handleDelete = () => {};

  // я не знаю як повертатися до початкового стану
  const handleOnDisable = () => {
    // setCities();
  };

  return {
    handleActiveDropdown,
    handleOnDisable,

    dropdownActive
  };
};

export default useDropdownMenu;
