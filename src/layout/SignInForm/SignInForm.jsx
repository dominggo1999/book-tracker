import React from 'react';
import { FaGoogle as Google } from 'react-icons/fa';
import { SiDiscord as Discord } from 'react-icons/si';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Container } from '../../shared/Flexi';
import {
  FormType,
  AuthProviders,
  RegistrationFormWrapper,
  Divider,
  FormFields,
  LabelAndError,
  ErrorMsgWrapper,
  FormButton,
  FormMessage,
} from '../../atom/RegistrationForm';
import AuthProviderButton from '../../atom/AuthProviderButton';
import Link from '../../atom/Link';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'must be longer than 8')
    .required('Required'),
});

const SignInForm = () => {
  const handleSubmit = (e) => {
    console.log('Signing you in');
  };

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
        </AuthProviders>
        <Divider>
          or use your email for registration
        </Divider>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormFields>

            <Form>

              <LabelAndError>
                <label htmlFor="email">Email</label>
                <ErrorMsgWrapper>
                  <ErrorMessage
                    name="email"
                  />
                </ErrorMsgWrapper>
              </LabelAndError>
              <Field
                type="email"
                required
                placeholder="myemail@email.com"
                name="email"
              />

              <LabelAndError>
                <label htmlFor="password">Password</label>
                <ErrorMsgWrapper>
                  <ErrorMessage
                    name="password"
                  />
                </ErrorMsgWrapper>
              </LabelAndError>
              <Field
                type="password"
                required
                name="password"
              />
              <FormButton type="submit">Sign in</FormButton>
            </Form>

            <FormMessage>
              Don&apos;t have an account yet?
              {' '}
              <Link to="/sign-up">
                Sign up
              </Link>
            </FormMessage>
            <FormMessage>
              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </FormMessage>
          </FormFields>
        </Formik>

        {/* Message When Error On Submitting here */}
      </RegistrationFormWrapper>
    </Container>
  );
};

export default SignInForm;
