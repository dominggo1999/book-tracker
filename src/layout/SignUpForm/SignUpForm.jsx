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
  name: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  name: Yup.string()
    .min(3, 'Min 3 characters')
    .max(20, 'Max 20 characters')
    .required('Required'),
  password: Yup.string()
    .min(8, 'must be longer than 8')
    .required('Required'),
});

const SignUpForm = () => {
  const handleSubmit = (e) => {
    console.log('registering your account');
  };

  return (
    <Container>
      <FormType>Sign Up</FormType>
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
                <label htmlFor="name">Name</label>
                <ErrorMsgWrapper>
                  <ErrorMessage
                    name="name"
                  />
                </ErrorMsgWrapper>
              </LabelAndError>
              <Field
                type="text"
                required
                placeholder="John Doe"
                name="name"
              />

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
              <FormButton type="submit">Sign up</FormButton>
            </Form>
            <FormMessage>
              Already have an account?
              <Link to="/sign-in">
                {' '}
                Sign in
              </Link>
            </FormMessage>

            {/* Message When Error On Submitting here */}
          </FormFields>
        </Formik>

      </RegistrationFormWrapper>
    </Container>
  );
};

export default SignUpForm;
