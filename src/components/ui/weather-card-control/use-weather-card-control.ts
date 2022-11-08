import { SetStateAction, useState } from 'react';

const useWeatherCardControl = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleAddSearch = () => {
    setIsActive(true);
  };

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log(inputValue);
    e.preventDefault();
  };

  return { inputValue, handleInput, handleSubmit, handleAddSearch, isActive };
};
export default useWeatherCardControl;
