import React from 'react';
import { FormButton } from './RegistrationForm';

const AuthProviderButton = ({ provider, icon: Icon, ...rest }) => {
  return (
    <FormButton {...rest}>
      <Icon />
      Continue with {provider}
    </FormButton>
  );
};

export default AuthProviderButton;
