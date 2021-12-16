import React from 'react';
import { Btn } from './AuthProviderButton.style';

const AuthProviderButton = ({ provider, icon: Icon, ...rest }) => {
  return (
    <Btn {...rest}>
      <Icon />
      Continue with {provider}
    </Btn>
  );
};

export default AuthProviderButton;
