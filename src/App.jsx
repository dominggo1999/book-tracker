import React, { useContext } from 'react';
import Routes from './Routes';
import { ThemeContext } from './context/ThemeProvider';
import Header from './layout/Header/Header';
import SideNavbarProvider from './context/SideNavbarProvider';
import SideNavbar from './layout/SideNavbar/SideNavbar';

const App = () => {
  const { theme } = useContext(ThemeContext) || {};

  return (
    <div
      className={theme}
    >
      <SideNavbarProvider>
        <SideNavbar />
        <Header />
        <Routes />
      </SideNavbarProvider>
    </div>
  );
};

export default App;
