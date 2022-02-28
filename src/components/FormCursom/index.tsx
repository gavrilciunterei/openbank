import { Formik } from 'formik';
import React from 'react';
import { FormProps } from './types';

function FormCursom({
  onSubmit,
  initialValues,
  validationSchema,
  children,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {children}
    </Formik>
  );
}

export default FormCursom;
