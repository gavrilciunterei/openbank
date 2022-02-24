import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  track: Yup.string().optional(),
});

export default FormSchema;
