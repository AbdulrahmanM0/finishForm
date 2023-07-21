import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DormForm = () => {
  return (
    <Formik
      initialValues={{ option: '', name: '' }}
      validationSchema={Yup.object({
        option: Yup.string().required('Please select an option'),
        name: Yup.string().when('option', {
          is: 'with_name', // 'with_name' is the value of the option that triggers name input
          then: Yup.string().required('Please enter your name'),
        }),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="option">Select an option:</label>
            <Field as="select" name="option">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="with_name">Option 2 (with name input)</option>
            </Field>
            {errors.option && touched.option && (
              <div style={{ color: 'red' }}>{errors.option}</div>
            )}
          </div>

          {values.option === 'with_name' && (
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              {errors.name && touched.name && (
                <div style={{ color: 'red' }}>{errors.name}</div>
              )}
            </div>
          )}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default DormForm;
