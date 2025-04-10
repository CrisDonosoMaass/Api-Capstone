import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  createAccountLink: {
    marginLeft: 3,
    color: Colors.yellow,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  recoverPasswordLink: {
    width: 289,
    color: '#ffffff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  button: {
    marginBottom: 20,
    width: '100%',
    height: 54,
  },
  logo: {
    width: 152,
    height: 34,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  checkBoxLabel: {
    marginLeft: 5,
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 100,
  },
});
