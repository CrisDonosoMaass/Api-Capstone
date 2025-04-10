export interface LoginProps {
  onGoogleSignIn?: () => void;
  onGoBackPress: () => void;
  rememberMe: boolean;
  onRememberMe: (values: LoginValues) => void;
}
export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginComponentProps {
  onLogin: (values: LoginValues) => void;
  onGoogleSignIn?: () => void;
  onGoBackPress: () => void;
  initialValues?: LoginValues;
  rememberMe: boolean;
  onRememberMe: (values: LoginValues) => void;
}
