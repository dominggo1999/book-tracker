import React from 'react';
import { ContainerStyle } from './Container.style';

const Container = ({
  children, ...restProps
}) => {
  return (
    <ContainerStyle
      {...restProps}
    >
      {children}
    </ContainerStyle>
  );
};

export default Container;
