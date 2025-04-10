import { Formik } from 'formik';

import { LoginSchema } from '../../schemas/login';
import { LoginComponentProps, LoginValues } from './Login.types';
import LoginView from './Login.view';

const defaultInitialValues: LoginValues = {
  email: '',
  password: '',
};

export default function LoginComponent({
  onLogin,
  initialValues,
  ...props
}: LoginComponentProps) {
  return (
    <Formik
      initialValues={initialValues || defaultInitialValues}
      validationSchema={LoginSchema}
      onSubmit={onLogin}
      enableReinitialize
    >
      <LoginView {...props} />
    </Formik>
  );
}
