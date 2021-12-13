import React, { createContext, useReducer, useEffect } from 'react';
import { breakpoints } from '../constants/breakpoints';

const initialState = {
  show: false,
};

export const SideNavbarContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        show: !state.show,
      };
    case 'OPEN':
      return {
        ...state,
        show: true,
      };
    case 'CLOSE':
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

const SideNavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const open = () => dispatch({ type: 'OPEN' });
  const close = () => dispatch({ type: 'CLOSE' });
  const toggle = () => dispatch({ type: 'TOGGLE' });

  useEffect(() => {
    const closeSidebarOnLargeScreen = () => {
      if(window.innerWidth >= breakpoints.md) {
        close();
      }
    };

    window.addEventListener('resize', closeSidebarOnLargeScreen);

    return () => {
      window.removeEventListener('resize', closeSidebarOnLargeScreen);
    };
  }, []);

  return (
    <SideNavbarContext.Provider
      value={{
        show: state.show, open, close, toggle,
      }}
    >
      {children}
    </SideNavbarContext.Provider>
  );
};

export default SideNavbarProvider;
