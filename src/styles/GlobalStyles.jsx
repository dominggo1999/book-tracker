import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { ThemeContext } from '../context/ThemeProvider';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased 
      font-content  
    `}

    ${({ dark }) => dark && tw`bg-primary`}
  }

  *{
    ${tw`
      font-content  
    `}
  }
`;

const GlobalStyles = () => {
  const { theme } = useContext(ThemeContext) || {};
  const dark = theme === 'dark';

  return (
    <>
      <BaseStyles />
      <CustomStyles dark={dark} />
    </>
  );
};

export default GlobalStyles;
