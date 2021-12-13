import React, { useContext } from 'react';
import Routes from './Routes';
import { ThemeContext } from './context/ThemeProvider';
import Header from './layout/Header/Header';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
