import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { ThemeContext } from '../context/ThemeProvider';
import { colors } from '../constants/colors';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased 
      font-content  
    `}

    ${({ dark }) => dark && tw`bg-primary`}
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus
  input:-webkit-autofill, 
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ dark }) => (dark ? colors.white : colors.primary)};
    -webkit-box-shadow: 0 0 0px 1000px ${({ dark }) => (dark ? colors.primary : 'white')} inset;
  }

  input::placeholder {
    color: #74aab4;
    opacity:${({ dark }) => (dark ? 0.5 : 1)};
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
