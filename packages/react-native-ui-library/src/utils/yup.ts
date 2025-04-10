import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'requiredField',
  },
  string: {
    email: 'invalidEmail',
    min: ({ min }) => ({ key: 'fieldTooShort', values: { min } }),
  },
  array: {
    min: ({ min }) => ({ key: 'tooFewItems', values: { count: min } }),
  },
});

export default Yup;
