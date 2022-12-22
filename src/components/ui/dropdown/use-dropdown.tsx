import { useContext, useState } from 'react';
import { UseDropdownMenuProps } from './types';
import { CardsContext } from '../../complex/weather/cards-context';

const useDropdownMenu = ({ index }: UseDropdownMenuProps) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const { setCities, cities } = useContext(CardsContext);

  const handleToggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleDeleteCard = () => {
    setCities(cities.splice(index));
  };

  return {
    handleToggleDropdown,
    handleDeleteCard,

    dropdownActive
  };
};

export default useDropdownMenu;
