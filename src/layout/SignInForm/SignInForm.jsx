import React from 'react';
import { FaGoogle as Google } from 'react-icons/fa';
import { SiDiscord as Discord } from 'react-icons/si';
import { Container } from '../../shared/Flexi';
import {
  FormType,
  AuthProviders,
  RegistrationFormWrapper,
  Divider,
} from '../../atom/RegistrationForm';
import AuthProviderButton from '../../atom/AuthProviderButton/AuthProviderButton';

const SignInForm = () => {
  return (
    <Container>
      <FormType>Sign In</FormType>
      <RegistrationFormWrapper>
        <AuthProviders>
          <AuthProviderButton
            icon={Google}
            provider="Google"
          />
          <AuthProviderButton
            icon={Discord}
            provider="Discord"
          />
          <Divider>
            or use your email for registration
          </Divider>
        </AuthProviders>
      </RegistrationFormWrapper>
    </Container>
  );
};

export default SignInForm;
