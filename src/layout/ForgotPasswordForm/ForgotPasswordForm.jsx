import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Container } from '../../shared/Flexi';
import {
  FormType,
  RegistrationFormWrapper,
  FormFields,
  LabelAndError,
  ErrorMsgWrapper,
  FormButton,
  FormMessage,
} from '../../atom/RegistrationForm';
import Link from '../../atom/Link';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
});

const ForgotPasswordForm = () => {
  const handleSubmit = (e) => {
    console.log('Sending reset password instruction');
  };

  return (
    <Container>
      <FormType>Forgot Password</FormType>
      <RegistrationFormWrapper>
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

              <FormButton type="submit">Send reset password instructions</FormButton>
            </Form>
            <FormMessage>
              Back to {' '}
              <Link to="/sign-in">
                Sign in
              </Link>
            </FormMessage>
          </FormFields>
        </Formik>

        {/* Message When Error On Submitting here */}
      </RegistrationFormWrapper>
    </Container>
  );
};

export default ForgotPasswordForm;
