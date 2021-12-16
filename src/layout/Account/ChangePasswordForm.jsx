import React from 'react';
import * as Yup from 'yup';
import {
  Field,
  Formik,
  Form,
  ErrorMessage,
} from 'formik';
import {
  ChangePasswordWrapper,
  PasswordFieldArea,
  Actions,
  ActionButton,
  PasswordError,
} from './Account.style';

const ChangePasswordForm = ({ setShowChangePasswordForm }) => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required('Required')
      .min(10, 'Must be longer than 8 characters'),
    newPassword: Yup.string()
      .required('Required')
      .min(10, 'Must be longer than 8 characters'),
    confirmPassword: Yup.string()
      .required('Required')
      .min(10, 'Must be longer than 8 characters'),
  });

  const handleSubmit = (e) => {
    console.log('Changing Your Password');
  };

  return (
    <ChangePasswordWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <PasswordFieldArea>
            <label htmlFor="currentPassword">Current Password</label>
            <Field
              type="password"
              required
              name="currentPassword"
            />
            <ErrorMessage
              name="currentPassword"
              component={PasswordError}
            />
          </PasswordFieldArea>
          <PasswordFieldArea>
            <label htmlFor="newPassword">New password</label>
            <Field
              type="password"
              required
              name="newPassword"
            />
            <ErrorMessage
              name="newPassword"
              component={PasswordError}
            />
          </PasswordFieldArea>
          <PasswordFieldArea>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              required
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component={PasswordError}
            />
          </PasswordFieldArea>
          <Actions>
            <ActionButton type="submit">Save</ActionButton>
            <ActionButton
              onClick={() => { setShowChangePasswordForm(false); }}
              danger
              type="button"
            >Cancel
            </ActionButton>
          </Actions>
        </Form>
      </Formik>

    </ChangePasswordWrapper>
  );
};

export default ChangePasswordForm;
