import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    position: 'absolute',
    width: 200,
    height: 100,
    bottom: 120,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  exitModal: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#d8e4e9',
    borderRadius: 100,
    width: 35,
    height: 35,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '60%',
  },
  gridItem: {
    height: 56,
    width: 65,
    maxHeight: '100%',
    maxWidth: '100%',
    alignItems: 'center',
  },
  gridText: {
    color: Colors.blue,
    textAlign: 'center',
  },
});
