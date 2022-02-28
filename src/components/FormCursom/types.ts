import { FormikHelpers } from 'formik';
import React from 'react';

export type FormProps = {
  onSubmit: (values: object, formikHelpers: FormikHelpers<object>) => void;
  initialValues: object;
  validationSchema: object;
  children: React.ReactNode;
};
