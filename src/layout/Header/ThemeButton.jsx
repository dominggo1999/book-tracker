import React, { useContext, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeProvider';
import { ThemeButton as Button, Circle } from './Header.style';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext) || {};
  const [clicked, setClicked] = useState(false);

  const Icon = theme === 'dark' ? BsLightningCharge : MdOutlineDarkMode;

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
    setClicked(true);
  };

  return (
    <Button
      clicked={clicked}
      onClick={changeTheme}
    >
      <Circle>
        <Icon />
      </Circle>
    </Button>
  );
};

export default ThemeButton;
