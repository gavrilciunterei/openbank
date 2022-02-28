import { FormikProps } from 'formik';

export type FormikPropss = FormikProps<{
  password: string;
  repeatPassword: string;
  track: string;
}>;
