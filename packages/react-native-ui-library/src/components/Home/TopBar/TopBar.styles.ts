import { StyleSheet } from 'react-native';

export const barHeight = 56;

const styles = StyleSheet.create({
  container: {
    height: barHeight,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '3%',
    paddingLeft: '3%',
    zIndex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 56,
    height: 34,
    marginBottom: 30,
    marginRight: 8,
    marginTop: 20,
  },
  menu: {
    marginLeft: 20,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 0,
  },
});
export default styles;
