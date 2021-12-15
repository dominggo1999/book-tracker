import React, { useContext } from 'react';
import Routes from './Routes';
import { ThemeContext } from './context/ThemeProvider';
import Header from './layout/Header/Header';
import SideNavbarProvider from './context/SideNavbarProvider';
import SideNavbar from './layout/SideNavbar/SideNavbar';
import BottomNavigation from './layout/BottomNavigation/BottomNavigation';
import useSizes from './hooks/useSizes';
import 'twin.macro';

const App = () => {
  const { theme } = useContext(ThemeContext) || {};
  const { isMedium } = useSizes();

  return (
    <div
      className={theme}
    >
      <div
        tw="pb-20 md:pb-0 dark:bg-primary"
      >
        <SideNavbarProvider>
          <SideNavbar />
          {!isMedium && <BottomNavigation /> }
          <Header />
          <Routes />
        </SideNavbarProvider>
      </div>
    </div>
  );
};

export default App;
