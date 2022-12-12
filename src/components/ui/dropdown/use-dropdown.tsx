import { useState } from 'react';

const useDropdownMenu = () => {
  const [dropdownActive, setDropdownActive] = useState(true);
  const [dropdownDisable, setDropdownDisable] = useState(false);

  const handleOnClick = () => {
    setDropdownActive(false);
  };

  // я не знаю як повертатися до початкового стану
  const handleOnDisable = () => {
    // setCities();
  };

  return {
    handleOnClick,
    handleOnDisable,

    dropdownActive,
    dropdownDisable
  };
};

export default useDropdownMenu;
