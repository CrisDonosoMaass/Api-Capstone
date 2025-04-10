import CommonMessages from '../components/Common/Common.i18n';
import ErrorMessageMessages from '../components/Common/FormikFields/ErrorMessage/ErrorMessage.i18n';
import LoginMessages from '../components/Login/Login.i18n';
import NavigationMessages from '../components/ModalHome/ModalHome.i18n';
import WelcomeMessages from '../components/Welcome/Welcome.i18n';

const messages = {
  Welcome: WelcomeMessages.en,
  ErrorMessage: ErrorMessageMessages.en,
  Login: LoginMessages.en,
  Navigation: {
    Bar: NavigationMessages.en,
  },
  Common: CommonMessages.en,
} satisfies Messages;

export default messages;
