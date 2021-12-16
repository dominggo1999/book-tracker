import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Field,
  Formik,
  Form,
  ErrorMessage,
} from 'formik';
import {
  ActionButton,
  NameForm,
  FormLine,
  Error,
  FieldArea,
} from './Account.style';

const ChangeNameForm = () => {
  const inputRef = useRef();

  const initialValues = {
    name: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .max(50, 'Name must be less than 50 characters'),
  });

  const handleSubmit = (e) => {
    // Call api here to change the name
    console.log('Changing your username');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <NameForm>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <FormLine>
            <FieldArea>
              <Field
                type="text"
                required
                name="name"
                innerRef={inputRef}
              />
              <ErrorMessage
                name="name"
                component={Error}
              />
            </FieldArea>

            <ActionButton type="submit">Save</ActionButton>

          </FormLine>
        </Form>
      </Formik>
    </NameForm>
  );
};

export default ChangeNameForm;
