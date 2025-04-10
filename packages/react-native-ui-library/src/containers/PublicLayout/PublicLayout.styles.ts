import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export const paddingHorizontal = 0.075;
export const maxWidth = 1024;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    width: '100%',
  },
  subContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '7.5%',
    marginBottom: 20,
    alignItems: 'center',
  },
});
