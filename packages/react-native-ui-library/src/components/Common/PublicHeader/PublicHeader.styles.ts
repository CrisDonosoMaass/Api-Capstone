import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 100,
    width: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
    paddingTop: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 56,
    height: 34,
    marginBottom: 30,
    marginRight: 8,
  },
  backButton: {
    position: 'absolute',
    top: 14,
    left: 0,
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: 30,
    marginBottom: 3,
    paddingTop: 3,
    marginTop: 2,
    marginLeft: 25,
    marginRight: 25,
  },
  subtitle: {
    width: 300,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 15,
  },
});
