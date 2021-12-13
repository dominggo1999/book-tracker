import React, { useContext } from 'react';
import tw, { styled } from 'twin.macro';
import Routes from './Routes';
import { ThemeContext } from './context/ThemeProvider';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <div className={theme}>
      <button onClick={changeTheme}>Toggle Theme</button>
      <div tw="w-full h-screen dark:bg-primary"></div>
      <Routes />
    </div>
  );
};

export default App;
