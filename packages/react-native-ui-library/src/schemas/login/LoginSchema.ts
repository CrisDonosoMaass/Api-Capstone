import Yup from '../../utils/yup';

export const LoginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(3).required(),
});
