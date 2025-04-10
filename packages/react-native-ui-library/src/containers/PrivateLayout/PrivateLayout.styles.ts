import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export const paddingHorizontal = 0.075;
export const maxWidth = 1024;

export const styles = StyleSheet.create({
  subContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.blue,
    width: '100%',
    flex: 1,
    paddingHorizontal: '7.5%',
  },
  subContainerScrollable: {
    backgroundColor: Colors.blue,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
});
