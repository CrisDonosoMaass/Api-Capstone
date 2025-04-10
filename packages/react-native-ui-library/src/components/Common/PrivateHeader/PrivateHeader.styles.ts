import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    zIndex: 1,
    position: 'absolute',
    left: 23,
  },
  title: {
    width: 'auto',
    marginLeft: 22,
    textAlign: 'center',
    color: '#ffffff',
  },
  titleContainer: {
    width: '80%',
  },
});
